import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import {
  IContractsFilter,
  ITranchesFilter,
  IFilterELem,
} from '../../models/filter';
import { IContract } from '../../models/contracts';
import { ITranche } from '../../models/tranches';

interface AppState {
  navigation: string;
  contractsFilter: IContractsFilter;
  tranchesFilter: ITranchesFilter;
  current_contract?: IContract;
  current_tranche?: ITranche
}

const initialState: AppState = {
  navigation: 'contracts',
  contractsFilter: {},
  tranchesFilter: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<string>) {
      state.navigation = action.payload;
    },
    setContractsFilter(state, action: PayloadAction<IFilterELem>) {
      const { name, value } = action.payload;
      state.contractsFilter[name] = value;
    },
    setTranchesFilter(state, action: PayloadAction<IFilterELem>) {
      const { name, value } = action.payload;
      state.tranchesFilter[name] = value;
    },
    setCurrentContract(state, action: PayloadAction<IContract>) {
      state.current_contract = action.payload;
    },
    setCurrentTranche(state, action: PayloadAction<ITranche>) {
      state.current_tranche = action.payload;
    },
  },
});

export const {
  setNavigation,
  setContractsFilter,
  setTranchesFilter,
  setCurrentContract,
  setCurrentTranche
} = appSlice.actions;
export default appSlice.reducer;
