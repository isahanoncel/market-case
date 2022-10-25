import { createSlice } from '@reduxjs/toolkit';

interface IBasketSlice {
  price: number;
}

const initialState: IBasketSlice = {
  price: 0.0,
};

const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    setBasket(state, action) {
      state.price = action.payload;
    },
    clearBasket(state) {
      state.price = initialState.price;
    },
  },
});

export const { setBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
