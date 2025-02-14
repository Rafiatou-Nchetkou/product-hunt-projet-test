import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import commentReducer from './commentSlice';

const store = configureStore({
  reducer: {
    products: productReducer,  
    comments: commentReducer,
  },
});

export default store;
