import { types } from "./actionType";
import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import {
  apiPosts,
  apiUsers,
  requestFunction,
} from "../../../services/jsonPlaceHolderApi";
import { setUserPost, setUsers } from "../redux/actions";
import { setUserPostSaga } from "./actionCreator";

export function* workerUsersData(): Generator {
  try {
    const result = yield call(requestFunction, apiUsers);
    yield put(setUsers(result));
  } catch (error) {
    console.warn("workerUsersData ===>", error);
  }
}

export function* watcherUsersData() {
  yield takeEvery(types.SET_USERS_SAGA, workerUsersData);
}

export function* workerUserPostData(
  action: ReturnType<typeof setUserPostSaga>
): Generator {
  try {
    const result = yield call(
      requestFunction,
      apiPosts + "?userId=" + action.id
    );
    yield put(setUserPost(result));
  } catch (error) {
    console.warn("workerUserPostData ===>", error);
  }
}

export function* watcherUserPostData() {
  yield takeEvery(types.SET_USER_POST_SAGA, workerUserPostData);
}
