import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      name: "",
      email: "",
      address: "",
      phone: "",
    },
    loggedInUser: null,
  },
  reducers: {
    updateUserProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload.name;
      state.profile = { ...state.profile, ...action.payload };
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
      state.profile = {
        name: "",
        email: "",
        address: "",
        phone: "",
      };
    },
  },
});

export const { updateUserProfile, setLoggedInUser, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;
