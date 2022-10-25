import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/product';

interface IProductsSlide {
  products?: IProduct[];
}

const initialState: IProductsSlide = {
  products: [],
};

const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addProducts(state, action) {
      state.products?.push(action.payload);
    },
    deleteProduct(state, action) {
      state.products = state.products?.filter(
        (product) => product.slug !== action.payload,
      );
    },
  },
});

export const { addProducts, setProducts, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
