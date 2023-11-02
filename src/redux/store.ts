import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import myBookReducer from './slices/myBooksSlice';
import {openLibraryApi} from '../api/openLibraryApi';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [openLibraryApi.reducerPath],
};

const rootReducers = combineReducers({
  [openLibraryApi.reducerPath]: openLibraryApi.reducer,
  myBooks: myBookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(openLibraryApi.middleware),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
