import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { IContractsFilter, IFilterELem } from '../../models/filter';
import { IContract } from '../../models/contracts';

interface ContractsState {
  contractsFilter: IContractsFilter;
  current_contract?: IContract;
}

const initialState: ContractsState = {
  contractsFilter: {},
};

const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setContractsFilter(state, action: PayloadAction<IFilterELem>) {
      const { name, value } = action.payload;
      state.contractsFilter[name] = value;
    },
    setCurrentContract(state, action: PayloadAction<IContract>) {
      state.current_contract = action.payload;
    },
  },
});

export const { setContractsFilter, setCurrentContract } =
  contractsSlice.actions;
export default contractsSlice.reducer;
