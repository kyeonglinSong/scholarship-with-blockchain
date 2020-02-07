import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as scholarAPI from '../lib/api/scholar';

const [LIST_SCHOLARS, LIST_SCHOLARS_SUCCESS, LIST_SCHOLARS_FAILURE]=createRequestActionTypes('scholarList/LIST_SCHOLARS');
const NEXT_PAGE=('scholarList/NEXT_PAGE');
const PREV_PAGE=('scholarList/PREV_PAGE');

export const listScholars = createAction(LIST_SCHOLARS);
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);

const listScholarsSaga = createRequestSaga(LIST_SCHOLARS, scholarAPI.readScholarList);
export function* scholarsSaga(){
    yield takeLatest(LIST_SCHOLARS, listScholarsSaga);
}

const initialState={
    scholars:null,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
}

const scholars = handleActions(
    {
        [LIST_SCHOLARS_SUCCESS]:(state, { payload:scholars, meta:response })=>({
            ...state,
            scholars,
            lastPage: parseInt((scholars.length-1)/10),
            total:parseInt(scholars.length),
        }),
        [LIST_SCHOLARS_FAILURE]:(state, { payload:error })=>({
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

export default scholars;