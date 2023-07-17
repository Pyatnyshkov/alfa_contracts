import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { IFilter, IFilterELem } from '../../models/filter';
import { IContract } from '../../models/contracts';

interface AppState {
  navigation: string;
  filter: IFilter;
  current_contract?: IContract;
}

const initialState: AppState = {
  navigation: 'contracts',
  filter: {}
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
    setCurrentContract(state, action: PayloadAction<IContract>) {
      state.current_contract = action.payload;
    }
  },
});

export const { setNavigation, setFilter, setCurrentContract } = appSlice.actions;
export default appSlice.reducer;
