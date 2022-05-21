import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

const initialState = {
  list: [],
  pages: 0,
  activePage: 1,
  activePosts: [],
  postComments: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => ({
      ...state,
      list: action.payload,
      pages: action.payload.length / 10,
      activePosts: action.payload.filter(
        (post: Post, index: number) =>
          index >= state.activePage * 10 - 10 && index < state.activePage * 10
      ),
    }),
    setActivePage: (state, action) => ({
      ...state,
      activePage: action.payload,
    }),
    setPostComments: (state, action) => ({
      ...state,
      postComments: action.payload,
    }),
  },
});

export default postsSlice.reducer;
