import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

interface AppState {
  navigation: string;
}

const initialState: AppState = {
  navigation: 'contracts',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<string>) {
      state.navigation = action.payload;
    },
  },
});

export const { setNavigation } = appSlice.actions;
export default appSlice.reducer;
