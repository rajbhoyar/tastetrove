// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      name: "Raj Bhoyar",
      email: "Rajbhoyar21@gmail.com",
      address: "Bengaluru",
      phone: "9420846333",
    },
  },
  reducers: {
    updateUserProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    // Other actions if needed
  },
});

export const { updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
