import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {IRepository} from '../../shared/models/githubAPIResponse';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  borderStyles,
  flexStyles,
  marginStyles,
  paddingStyles,
  shadowStyles,
} from '../../shared/styles';
import HomeListContainer from './components/HomeListContainer';
import Footer from './components/HomeListFooter';
import HomeListSkeleton from './components/HomeListSkeleton';
import RepoModal from './components/RepoModal';
import RepositoryItem from './components/RepositoryItem';
import TabHeader from './components/TabHeader';
import useGithubAPI from './hooks/useGithubAPI';
import {LayoutOptionEnum} from './models';

const HomeScreen = () => {
  //#region Hooks
  const {
    errorRepositories,
    loadingRepositories,
    repositories,
    handleNextPage,
    handlePreviousPage,
    pageNumber,
  } = useGithubAPI();
  //#endregion

  //#region State
  const [layout, setLayout] = useState<LayoutOptionEnum>(
    LayoutOptionEnum.oneViewInRow,
  );
  const [selectedRepository, setSelectedRepository] =
    useState<IRepository | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  //#endregion

  //#region useMemo variables
  const columnWidth = React.useMemo(() => {
    const longestItem = repositories.reduce((acc, item) => {
      return item.full_name.length > acc.length ? item.full_name : acc;
    }, '');
    return longestItem.length;
  }, [repositories]);
  //#endregion

  //#region Functions
  const getColumnCount = () => {
    switch (layout) {
      case 'Bir görünüm':
        return 1;
      case 'İki görünüm':
        return 2;
      case 'Üç görünüm':
        return 3;
      default:
        return 1;
    }
  };

  const handlePressTab = useCallback(
    (itemIdentifier: LayoutOptionEnum) => () => {
      setLayout(itemIdentifier);
    },
    [],
  );

  const handlePressItem = useCallback(
    (item: IRepository) => () => {
      setSelectedRepository(item);
      setModalVisible(true);
    },
    [],
  );

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);
  //#endregion

  return (
    <View
      style={[
        flexStyles.flex,
        marginStyles.margin,
        paddingStyles.padding,
        backgroundColorStyles.backgroundColor,
        shadowStyles.shadow,
        borderRadiusStyles.borderRadius,
        borderStyles.borderWhite,
      ]}>
      {/* Tab Start */}
      <TabHeader handlePress={handlePressTab} layout={layout} />
      {/* Tab End */}

      {/* List Start */}
      <HomeListContainer isHorizontalScrollable={getColumnCount() > 1}>
        <FlatList
          ListEmptyComponent={loadingRepositories ? <HomeListSkeleton /> : null}
          data={repositories}
          renderItem={({item}) => (
            <RepositoryItem
              handlePress={handlePressItem(item)}
              full_name={item.full_name}
              width={columnWidth}
            />
          )}
          keyExtractor={item => item.id.toString()}
          removeClippedSubviews={true}
          initialNumToRender={5}
          windowSize={5}
          maxToRenderPerBatch={5}
          key={layout}
          numColumns={getColumnCount()}
        />
      </HomeListContainer>
      {/* List End */}

      {/* Footer Start */}
      <Footer
        pageNumber={pageNumber}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
      {/* Footer End */}

      {/* Modal Start */}
      <RepoModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        description={selectedRepository?.description || ''}
        name={selectedRepository?.name || ''}
      />
      {/* Modal End */}
    </View>
  );
};

export default HomeScreen;
