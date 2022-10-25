import { createSlice } from '@reduxjs/toolkit';

interface IFilterSlice {
  brands: string[];
  tags: string[];
  sort: string;
}

const initialState: IFilterSlice = {
  brands: [],
  tags: [],
  sort: '',
};

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    setBrands(state, action) {
      if (state.brands.includes(action.payload)) {
        state.brands = state.brands.filter(
          (filter) => filter !== action.payload,
        );
        return;
      }
      state.brands = [...state.brands, action.payload];
    },
    setTags(state, action) {
      if (state.tags.includes(action.payload)) {
        state.tags = state.tags.filter((filter) => filter !== action.payload);
        return;
      }
      state.tags = [...state.tags, action.payload];
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setBrands, setTags, setSort } = filterSlice.actions;

export default filterSlice.reducer;
