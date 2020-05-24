import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';

const [READ_NOTICE, READ_NOTICE_SUCCESS, READ_NOTICE_FAILURE] = createRequestActionTypes('notice/READ_NOTICE');
const SET_TOKEN='notice/SET_TOKEN';
const UNLOAD_NOTICE = 'notice/UNLOAD_POST';
const SET_ID = 'notice/SET_ID';
const SET_INFO = 'notice/SET_INFO';

export const setToken = createAction(SET_TOKEN);
export const readNotice = createAction(READ_NOTICE, info=>info);
export const unloadNotice = createAction(UNLOAD_NOTICE);
export const setId = createAction(SET_ID);
export const setInfo = createAction(SET_INFO);

const readNoticeSaga = createRequestSaga(READ_NOTICE, noticeAPI.readNotice);
export function* noticeSaga(){
    yield takeLatest(READ_NOTICE, readNoticeSaga);
}

const initialState = {
    //id:null,
    notice:null,
    error:null,
    //token:null,
    author:null,
    info:{
        noticeId:null,
        author:null,
        token:null,
    }
};

const notice = handleActions(
    {
        [READ_NOTICE_SUCCESS]:(state, { payload:notice })=>({
            ...state,
            notice,
        }),
        [READ_NOTICE_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        }),
        [UNLOAD_NOTICE]:()=>initialState,
        [SET_TOKEN]:(state,{ payload: token, author })=>({
            ...state,
            token,
            author,
        }),
        [SET_ID]:(state, { payload: id })=>({
            ...state,
            id,
        }),
        [SET_INFO]:(state, { payload:info })=>({
            ...state,
            info,
        })
    },
    initialState,
);

export default notice;