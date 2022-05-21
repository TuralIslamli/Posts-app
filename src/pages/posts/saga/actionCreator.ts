import { types } from "./actionType";

export const setPostsSaga = () => ({
    type: types.SET_POSTS_SAGA
})

export const setPostCommentsSaga = (id: number) => ({
    type: types.SET_POST_COMMENTS_SAGA,
    id
})