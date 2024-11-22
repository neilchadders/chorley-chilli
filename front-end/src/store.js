import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';// import after created the file
import authSliceReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // add to configureStoreConst after creation
    cart: cartSliceReducer, // add to configureStoreConst after creation
    auth:authSliceReducer,
  },
  middleware: (getDefaultMiddleware) => // add to configureStoreConst after creation
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, 
});

export default store;