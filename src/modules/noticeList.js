import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';

const [LIST_NOTICES, LIST_NOTICES_SUCCESS, LIST_NOTICES_FAILURE]=createRequestActionTypes('noticeList/LIST_NOTICES');
const NEXT_PAGE=('noticeList/NEXT_PAGE');
const PREV_PAGE=('noticeList/PREV_PAGE');
const SET_TOKEN=('noticeList/SET_TOKEN');

export const listNotices = createAction(LIST_NOTICES, token=>token);
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);
export const setToken = createAction(SET_TOKEN);

const listNoticesSaga = createRequestSaga(LIST_NOTICES, noticeAPI.readNoticeList);
export function* noticesSaga(){
    yield takeLatest(LIST_NOTICES, listNoticesSaga);
}

var initialState={
    notices:null,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
    author:null,
}

/*
const user=JSON.parse(localStorage.getItem("user"));
if(user){
    const token = user.data.token;
    const author = user.data.role;

    initialState = {
        notices:null,
        error:null,
        lastPage:1,
        tempPage:1,
        total:1,
        token,
        author,
    };
}
*/

const notices = handleActions(
    {
        [LIST_NOTICES_SUCCESS]:(state, { payload:notices, meta:response })=>({
            ...state,
            notices,
            lastPage: parseInt((notices.length-1)/10),
            total:parseInt(notices.length),
        }),
        [LIST_NOTICES_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
        [SET_TOKEN]:(state,{ payload:token, author })=>({
            ...state,
            token,
            author,
        }),
    },
    initialState,
);

export default notices;