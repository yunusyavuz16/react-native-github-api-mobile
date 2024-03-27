import React from 'react';
import { FlatList, View } from 'react-native';
import RepositoryItem from './components/RepositoryItem';
import useGithubAPI from './hooks/useGithubAPI';

const HomeScreen = () => {
  const {errorRepositories, loadingRepositories, repositories} = useGithubAPI();

  return (
    <View style={styles.flex}>
      <FlatList
        data={repositories}
        renderItem={({item}) => <RepositoryItem full_name={item.full_name} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = {
  flex: {flex: 1, paddingTop: 50},
};

export default HomeScreen;
