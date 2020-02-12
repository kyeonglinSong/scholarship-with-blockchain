import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as applyAPI from '../lib/api/apply';

const [READ_APPLYDETAIL, READ_APPLYDETAIL_SUCCESS, READ_APPLYDETAIL_FAILURE] = createRequestActionTypes('applyDetail/READ_APPLYDETAIL');
const UNLOAD_APPLYDETAIL = 'applyDetail/UNLOAD_APPLYDETAIL';

export const readApplyDetail = createAction(READ_APPLYDETAIL, id=>id);
export const unloadApplyDetail = createAction(UNLOAD_APPLYDETAIL);

const readApplyDetailSaga = createRequestSaga(READ_APPLYDETAIL, applyAPI.readApplyDetail);
export function* applyDetailSaga(){
    yield takeLatest(READ_APPLYDETAIL, readApplyDetailSaga);
}

const initialState = {
    apply:null,
    error:null,
};

const applyDetail = handleActions(
    {
        [READ_APPLYDETAIL_SUCCESS]:(state, { payload:apply })=>({
            ...state,
            apply,
        }),
        [READ_APPLYDETAIL_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        }),
        [UNLOAD_APPLYDETAIL]:()=>initialState,
    },
    initialState,
);

export default applyDetail;