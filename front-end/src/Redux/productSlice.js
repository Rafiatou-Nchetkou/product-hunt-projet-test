import { createSlice } from '@reduxjs/toolkit';
import { Timestamp } from 'firebase/firestore';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
       // Convertir les Timestamp en millisecondes
       const productsWithSerializedDates = action.payload.map(product => {
        return {
          ...product,
          createdDate: product.createdDate instanceof Timestamp ? product.createdDate.toMillis() : product.createdDate
        };
      });
      state.products =  productsWithSerializedDates;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
    setError: (state, action) => {
      state.error = action.payload;
      return state;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;

export default productSlice.reducer;
