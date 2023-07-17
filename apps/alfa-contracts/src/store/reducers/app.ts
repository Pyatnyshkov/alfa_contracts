import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { IFilter, IFilterELem } from '../../models/filter';

interface AppState {
  navigation: string;
  filter: IFilter;
}

const initialState: AppState = {
  navigation: 'contracts',
  filter: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<string>) {
      state.navigation = action.payload;
    },
    setFilter(state, action: PayloadAction<IFilterELem>) {
      const { name, value } = action.payload;
      state.filter[name] = value;
    },
  },
});

export const { setNavigation, setFilter } = appSlice.actions;
export default appSlice.reducer;
