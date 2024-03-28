import {combineReducers} from '@reduxjs/toolkit';
import { repositoryReducer } from '../reducers/repositoryReducer';

const rootReducer = combineReducers({
  repositoryReducer: repositoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
