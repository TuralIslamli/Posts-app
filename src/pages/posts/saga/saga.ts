import { types } from "./actionType";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import {
  apiComments,
  apiPosts,
  requestFunction,
} from "../../../services/jsonPlaceHolderApi";
import { setPostComments, setPosts } from "../redux/actions";
import { setPostCommentsSaga } from "./actionCreator";

export function* workerPostsData(): Generator {
  try {
    const result = yield call(requestFunction, apiPosts);
    yield put(setPosts(result));
  } catch (error) {
    console.warn("workerPostsData ===>", error);
  }
}

export function* workerPostComments(
  action: ReturnType<typeof setPostCommentsSaga>
): Generator {
  try {
    const result = yield call(
      requestFunction,
      `${apiPosts}/${action.id}${apiComments}`
    );
    yield put(setPostComments(result));
  } catch (error) {
    console.warn("workerPostsData ===>", error);
  }
}

export function* watcherPostsData() {
  yield takeEvery(types.SET_POSTS_SAGA, workerPostsData);
}

export function* watcherPostComments() {
  yield takeEvery(types.SET_POST_COMMENTS_SAGA, workerPostComments);
}
