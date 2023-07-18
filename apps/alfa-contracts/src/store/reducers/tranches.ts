import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { ITranchesFilter, IFilterELem } from '../../models/filter';
import { ITranche } from '../../models/tranches';

interface TranchesState {
  tranchesFilter: ITranchesFilter;
  current_tranche?: ITranche;
}

const initialState: TranchesState = {
  tranchesFilter: {},
};

const tranchesSlice = createSlice({
  name: 'tranches',
  initialState,
  reducers: {
    setTranchesFilter(state, action: PayloadAction<IFilterELem>) {
      const { name, value } = action.payload;
      state.tranchesFilter[name] = value;
    },
    setCurrentTranche(state, action: PayloadAction<ITranche>) {
      state.current_tranche = action.payload;
    },
  },
});

export const { setTranchesFilter, setCurrentTranche } = tranchesSlice.actions;
export default tranchesSlice.reducer;
