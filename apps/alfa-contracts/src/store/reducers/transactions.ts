import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { ITransactionsFilter, IFilterELem } from '../../models/filter';
import { ITransaction } from '../../models/transactions';

interface TransactionsState {
  transactionsFilter: ITransactionsFilter;
  current_transaction?: ITransaction;
}

const initialState: TransactionsState = {
  transactionsFilter: {},
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactionsFilter(state, action: PayloadAction<IFilterELem>) {
      const { name, value } = action.payload;
      state.transactionsFilter[name] = value;
    },
    setCurrentTransaction(state, action: PayloadAction<ITransaction>) {
      state.current_transaction = action.payload;
    },
  },
});

export const { setTransactionsFilter, setCurrentTransaction } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
