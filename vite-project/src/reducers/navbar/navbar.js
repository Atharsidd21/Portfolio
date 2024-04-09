import { createSlice } from "@reduxjs/toolkit";
export const Nav = createSlice({
  name: "navbar",
  initialState: {
    value: false,
  },
  reducers: {
    handleNav: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handleNav } = Nav.actions;

export default Nav.reducer;
