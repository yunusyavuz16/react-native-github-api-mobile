// repositoryReducer

import {createSlice} from '@reduxjs/toolkit';
import {IRepository} from '../../../shared/models/githubAPIResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

interface IRepositoryReducer {
  repositories: {[key: number]: IRepository[]};
}

const initialState: IRepositoryReducer = {
  repositories: {},
};

const repositorySlice = createSlice({
  name: 'repositoryReducer',
  initialState,
  reducers: {
    setRepositoriesRedux(
      state,
      action: {payload: {key: number; value: IRepository[]}},
    ) {
      state.repositories[action.payload.key] = action.payload.value;
    },
  },
});

const repositoryPersistConfig = {
  key: 'repositoryReducer',
  storage: AsyncStorage,
};

export const {setRepositoriesRedux} = repositorySlice.actions;

export const repositoryReducer = persistReducer(
  repositoryPersistConfig,
  repositorySlice.reducer,
);
