import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice.js';

const store = configureStore({
	reducer: {
		product: productReducer,
	},
});

export default store;
