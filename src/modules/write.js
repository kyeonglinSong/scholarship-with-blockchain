import { createAction, handleActions, handleAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [ WRITE_NOTICE, WRITE_NOTICE_SUCCESS, WRITE_NOTICE_FAILURE] = createRequestActionTypes('write/WRITE_NOTICE');
const SET_ORIGINAL = 'write/SET_ORIGINAL';
const [UPDATE_NOTICE, UPDATE_NOTICE_SUCCESS, UPDATE_NOTICE_FAILURE] = createRequestActionTypes('write/UPDATE_NOTICE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value })=>({
    key,
    value,
}));
export const writeNotice = createAction(WRITE_NOTICE, ({ title, body })=>({
    title,
    body,
}));
export const setOriginal = createAction(SET_ORIGINAL, notice=>notice);
export const updateNotice = createAction(UPDATE_NOTICE, ({id, title, body})=>({id, title, body}));

const writeNoticeSaga = createRequestSaga(WRITE_NOTICE, noticeAPI.writeNotice);
const updateNoticeSaga = createRequestSaga(UPDATE_NOTICE, noticeAPI.updateNotice);
export function* writeSaga(){
    yield takeLatest(WRITE_NOTICE, writeNoticeSaga);
    yield takeLatest(UPDATE_NOTICE, updateNoticeSaga);
}

const initialState = {
    title:'',
    body:'',
    notice:null,
    noticeError:null,
    originalNoticeId:null,
};

const write = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [CHANGE_FIELD]:(state, { payload: { key, value } }) => ({
            ...state,
            [key]:value,
        }),
        [WRITE_NOTICE]:state=>({
            ...state,
            notice:null,
            noticeError:null,
        }),
        [WRITE_NOTICE_SUCCESS]:(state, { payload:notice })=>({
            ...state,
            notice,
        }),
        [WRITE_NOTICE_FAILURE]:(state, { payload:noticeError })=>({
            ...state,
            noticeError,
        }),
        [SET_ORIGINAL]:(state, { payload:originalnotice })=>({
            ...state,
            title:originalnotice.title,
            body:originalnotice.body,
            originalNoticeId:originalnotice.id,
        }),
        [UPDATE_NOTICE_SUCCESS]: (state, { payload: notice})=>({
            ...state,
            notice,
        }),
        [UPDATE_NOTICE_FAILURE]: (state, { payload: noticeError })=>({
            ...state,
            noticeError,
        })
    },
    initialState,
)

export default write;