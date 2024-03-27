import React, {useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  borderStyles,
  flexStyles,
  marginStyles,
  paddingStyles,
  shadowStyles,
} from '../../shared/styles';
import HomeListSkeleton from './components/HomeListSkeleton';
import RepositoryItem from './components/RepositoryItem';
import TabButton from './components/TabButton';
import useGithubAPI from './hooks/useGithubAPI';
import {LayoutOptionEnum} from './models';

const HomeScreen = () => {
  const {errorRepositories, loadingRepositories, repositories} = useGithubAPI();
  const [layout, setLayout] = useState<LayoutOptionEnum>(
    LayoutOptionEnum.oneViewInRow,
  );

  const columnWidth = React.useMemo(() => {
    const longestItem = repositories.reduce((acc, item) => {
      return item.full_name.length > acc.length ? item.full_name : acc;
    }, '');
    return longestItem.length;
  }, [repositories]);

  const getColumnCount = (layout: LayoutOptionEnum) => {
    switch (layout) {
      case 'oneViewInRow':
        return 1;
      case 'twoViewsInRow':
        return 2;
      case 'threeViewsInRow':
        return 3;
      default:
        return 1;
    }
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
        <TabButton
          label={LayoutOptionEnum.oneViewInRow}
          setLayout={setLayout}
          layout={layout}
          itemIdentifier={LayoutOptionEnum.oneViewInRow}
        />

        <TabButton
          label={LayoutOptionEnum.twoViewsInRow}
          setLayout={setLayout}
          layout={layout}
          itemIdentifier={LayoutOptionEnum.twoViewsInRow}
        />

        <TabButton
          label={LayoutOptionEnum.threeViewsInRow}
          setLayout={setLayout}
          layout={layout}
          itemIdentifier={LayoutOptionEnum.threeViewsInRow}
        />
      </View>
      {getColumnCount(layout) > 1 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
          style={[flexStyles.flex]}>
          <FlatList
            ListEmptyComponent={
              loadingRepositories ? <HomeListSkeleton /> : null
            }
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
            numColumns={getColumnCount(layout)}
          />
        </ScrollView>
      ) : (
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
          numColumns={getColumnCount(layout)}
        />
      )}
    </View>
  );
};

export default HomeScreen;
