import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as scholarAPI from '../lib/api/scholar';

const [READ_SCHOLAR, READ_SCHOLAR_SUCCESS, READ_SCHOLAR_FAILURE] = createRequestActionTypes('scholar/READ_SCHOLAR');
const UNLOAD_SCHOLAR = 'scholar/UNLOAD_POST';

export const readScholar = createAction(READ_SCHOLAR, id=>id);
export const unloadScholar = createAction(UNLOAD_SCHOLAR);

const readScholarSaga = createRequestSaga(READ_SCHOLAR, scholarAPI.readScholarDetail);
export function* scholarSaga(){
    yield takeLatest(READ_SCHOLAR, readScholarSaga);
}

const initialState = {
    scholar:null,
    error:null,
};

const scholarDetail = handleActions(
    {
        [READ_SCHOLAR_SUCCESS]:(state, { payload:scholar })=>({
            ...state,
            scholar,
        }),
        [READ_SCHOLAR_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        }),
        [UNLOAD_SCHOLAR]:()=>initialState,
    },
    initialState,
);

export default scholarDetail;