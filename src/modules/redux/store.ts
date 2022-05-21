import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/saga";
import { postsSlice } from "../../pages/posts/redux/reducer";
import { usersSlice } from "../../pages/users/redux/reducer";

export const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }),  sagaMiddleware];

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        users: usersSlice.reducer
    },
    middleware
  });

  sagaMiddleware.run(rootSaga);