import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/product';

type IBasketProduct = IProduct & { count: number };
interface IBasketSlice {
  items: IBasketProduct[];
  totalPrice: number;
}

const initialState: IBasketSlice = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      const findItem = state.items.find(
        (product) => product.slug === action.payload.slug,
      );
      if (findItem) {
        state.items = state.items.filter(
          (product) => product.slug !== action.payload.slug,
        );
        state.items = [
          ...state.items,
          { ...action.payload, count: findItem.count + 1 },
        ];
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }];
      }

      state.totalPrice = state.items.reduce(
        (acc, curr) => acc + curr.count * curr.price,
        0,
      );
    },
    incProductCount(state, action) {
      const findItem = state.items.find(
        (product) => product.slug === action.payload.slug,
      );

      if (findItem) {
        state.items = state.items.filter(
          (product) => product.slug !== action.payload.slug,
        );
        state.items = [
          ...state.items,
          { ...action.payload, count: findItem.count + 1 },
        ];
      }

      state.totalPrice = state.items.reduce(
        (acc, curr) => acc + curr.count * curr.price,
        0,
      );
    },
    decProductCount(state, action) {
      const findItem = state.items.find(
        (product) => product.slug === action.payload.slug,
      );

      if (findItem) {
        state.items = state.items.filter(
          (product) => product.slug !== action.payload.slug,
        );

        if (findItem.count > 1) {
          state.items = [
            ...state.items,
            { ...action.payload, count: findItem.count - 1 },
          ];
        }
      }

      state.totalPrice = state.items.reduce(
        (acc, curr) => acc + curr.count * curr.price,
        0,
      );
    },
    removeFromBasket(state, action) {
      state.items = state.items.filter((item) => item.slug !== action.payload);
      state.totalPrice = state.items.reduce(
        (acc, curr) => acc + curr.count * curr.price,
        0,
      );
    },
  },
});

export const {
  decProductCount,
  incProductCount,
  addToBasket,
  removeFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
