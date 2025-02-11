import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // L'utilisateur sera null au départ
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // On stocke les informations de l'utilisateur dans l'état
    },
    clearUser: (state) => {
      state.user = null; // Pour déconnecter l'utilisateur
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
