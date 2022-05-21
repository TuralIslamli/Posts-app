import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  userPost: []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    setUserPost: (state, action) => ({
      ...state,
      userPost: action.payload,
    }),
    
  },
});

export default usersSlice.reducer;
