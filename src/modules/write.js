import { createAction, handleActions, handleAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [ WRITE_NOTICE, WRITE_NOTICE_SUCCESS, WRITE_NOTICE_FAILURE] = createRequestActionTypes('write/WRITE_NOTICE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value })=>({
    key,
    value,
}));
export const writeNotice = createAction(WRITE_NOTICE, ({ title, body })=>({
    title,
    body,
}));

const writeNoticeSaga = createRequestSaga(WRITE_NOTICE, noticeAPI.writeNotice);
export function* writeSaga(){
    yield takeLatest(WRITE_NOTICE, writeNoticeSaga);
}

const initialState = {
    userId:'',
    id:'',
    title:'',
    body:'',
    notice:null,
    noticeError:null,
};

const write = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [CHANGE_FIELD]:(state, { payload: { key, value } }) => ({
            ...state,
            [key]:value,
        }),
    },
    initialState,
)

export default write;