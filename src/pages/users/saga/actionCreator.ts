import { types } from "./actionType";

export const setUsersSaga = () => ({
    type: types.SET_USERS_SAGA
})

export const setUserPostSaga = (id: number) => ({
    type: types.SET_USER_POST_SAGA, 
    id
})