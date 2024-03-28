import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig: PersistConfig<any> = {
  storage: AsyncStorage,
  key: 'my_app',
  whitelist: ['repositoryReducer'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
