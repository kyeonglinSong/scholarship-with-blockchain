import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';

const [LIST_NOTICES, LIST_NOTICES_SUCCESS, LIST_NOTICES_FAILURE]=createRequestActionTypes('noticeList/LIST_NOTICES');
const NEXT_PAGE=('noticeList/NEXT_PAGE');
const PREV_PAGE=('noticeList/PREV_PAGE');

export const listNotices = createAction(LIST_NOTICES);
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);

const listNoticesSaga = createRequestSaga(LIST_NOTICES, noticeAPI.readNoticeList);
export function* noticesSaga(){
    yield takeLatest(LIST_NOTICES, listNoticesSaga);
}

const initialState={
    notices:null,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
}

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
    },
    initialState,
);

export default notices;