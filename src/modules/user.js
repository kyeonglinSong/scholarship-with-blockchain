import { createAction, handleActions } from 'redux-actions';
import produce from 'immer/dist/immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

export const tempSetUser = createAction(TEMP_SET_USER, user=>user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga(){
    yield takeLatest(CHECK, checkSaga);
}

const initialState = {
    user:null,
    checkErorr:null,
};

export default handleActions(
    {
        [TEMP_SET_USER]:(state, { payload:user })=>({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]:(state, { payload:user })=>({
            ...state,
            user,
            checkErorr:null,
        }),
        [CHECK_FAILURE]:(state, { payload:error })=>({
            ...state,
            user:null,
            checkErorr:error,
        }),
    },
    initialState
);