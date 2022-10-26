import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/product';

interface IProductsSlide {
  items?: IProduct[];
}

const initialState: IProductsSlide = {
  items: [],
};

const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    addProducts(state, action) {
      state.items?.push(action.payload);
    },
    deleteProduct(state, action) {
      state.items = state.items?.filter(
        (product) => product.slug !== action.payload,
      );
    },
  },
});

export const { addProducts, setProducts, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
