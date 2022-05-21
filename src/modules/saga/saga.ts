import { spawn, all } from "redux-saga/effects";
import { watcherPostComments, watcherPostsData } from "../../pages/posts/saga/saga";
import { watcherUserPostData, watcherUsersData } from "../../pages/users/saga/saga";

export default function* rootSaga() {
    try {
        yield all([
            spawn(watcherPostsData),
            spawn(watcherPostComments),
            spawn(watcherUsersData),
            spawn(watcherUserPostData)
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    };
};