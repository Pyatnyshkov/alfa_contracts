import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

interface AppState {
  navigation: string;
  isAuth: boolean;
}

const initialState: AppState = {
  navigation: 'contracts',
  isAuth: JSON.parse(localStorage.getItem('isAuth') || 'false'),
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<string>) {
      state.navigation = action.payload;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      localStorage.setItem('isAuth', JSON.stringify(action.payload));
      state.isAuth = action.payload;
    },
  },
});

export const { setNavigation, setAuth } = appSlice.actions;
export default appSlice.reducer;
