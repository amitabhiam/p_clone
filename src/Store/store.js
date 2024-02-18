import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './Slice/authSlice';
import { thunk } from 'redux-thunk';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});