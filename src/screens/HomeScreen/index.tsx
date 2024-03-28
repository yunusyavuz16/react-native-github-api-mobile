import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
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
import RepositoryItem from './components/RepositoryItem';
import useGithubAPI from './hooks/useGithubAPI';
import {LayoutOptionEnum} from './models';
import HomeListButton from './components/HomeListButton';

const HomeScreen = () => {
  const {
    errorRepositories,
    loadingRepositories,
    repositories,
    handleNextPage,
    handlePreviousPage,
    pageNumber,
  } = useGithubAPI();

  const [layout, setLayout] = useState<LayoutOptionEnum>(
    LayoutOptionEnum.oneViewInRow,
  );

  const columnWidth = React.useMemo(() => {
    const longestItem = repositories.reduce((acc, item) => {
      return item.full_name.length > acc.length ? item.full_name : acc;
    }, '');
    return longestItem.length;
  }, [repositories]);

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

  const handlePress = (itemIdentifier: LayoutOptionEnum) => () => {
    setLayout(itemIdentifier);
  };

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
      <View
        style={[
          flexStyles.flexRow,
          flexStyles.justifySpaceAround,
          marginStyles.marginBottom20,
        ]}>
        <HomeListButton
          label={LayoutOptionEnum.oneViewInRow}
          onPress={handlePress(LayoutOptionEnum.oneViewInRow)}
          variant={
            layout === LayoutOptionEnum.oneViewInRow ? 'primary' : 'classic'
          }
        />

        <HomeListButton
          label={LayoutOptionEnum.twoViewsInRow}
          onPress={handlePress(LayoutOptionEnum.twoViewsInRow)}
          variant={
            layout === LayoutOptionEnum.twoViewsInRow ? 'primary' : 'classic'
          }
        />

        <HomeListButton
          label={LayoutOptionEnum.threeViewsInRow}
          onPress={handlePress(LayoutOptionEnum.threeViewsInRow)}
          variant={
            layout === LayoutOptionEnum.threeViewsInRow ? 'primary' : 'classic'
          }
        />
      </View>
      <HomeListContainer isHorizontalScrollable={getColumnCount() > 1}>
        <FlatList
          ListEmptyComponent={loadingRepositories ? <HomeListSkeleton /> : null}
          data={repositories}
          renderItem={({item}) => (
            <RepositoryItem full_name={item.full_name} width={columnWidth} />
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
      <Footer
        pageNumber={pageNumber}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </View>
  );
};

export default HomeScreen;
