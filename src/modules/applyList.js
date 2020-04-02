import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as applyListAPI from '../lib/api/apply';

const SET_TOKEN=('applyList/SET_TOKEN');
const [LIST_APPLIES, LIST_APPLIES_SUCCESS, LIST_APPLIES_FAILURE]=createRequestActionTypes('applyList/LIST_APPLIES');
const NEXT_PAGE=('applyList/NEXT_PAGE');
const PREV_PAGE=('applyList/PREV_PAGE');

export const setToken = createAction(SET_TOKEN);
export const listApplies = createAction(LIST_APPLIES, ({id, token})=>({id, token}));
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);

const listAppliesSaga = createRequestSaga(LIST_APPLIES, applyListAPI.readApplyList);
export function* appliesSaga(){
    yield takeLatest(LIST_APPLIES, listAppliesSaga);
}

const initialState={
    applies:null,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
}

const applies = handleActions(
    {
        [SET_TOKEN]:(state,{ payload:token })=>({
            ...state,
            token,
        }),
        [LIST_APPLIES_SUCCESS]:(state, { payload:applies })=>({
            ...state,
            applies,
            lastPage: parseInt((applies.length)/10),
            total:parseInt(applies.length),
        }),
        [LIST_APPLIES_FAILURE]:(state, { payload:error })=>({
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

export default applies;