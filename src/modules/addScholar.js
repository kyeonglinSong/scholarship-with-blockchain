import { createAction, handleActions, handleAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as scholarAPI from '../lib/api/scholar';

const INITIALIZE = 'scholarship/INITIALIZE';
const CHANGE_FIELD = 'scholarship/CHANGE_FIELD';
const [ ADD_SCHOLAR, ADD_SCHOLAR_SUCCESS, ADD_SCHOLAR_FAILURE] = createRequestActionTypes('scholarship/ADD_SCHOLAR');
const SET_ORIGINAL = 'scholarship/SET_ORIGINAL';
const [UPDATE_SCHOLAR, UPDATE_SCHOLAR_SUCCESS, UPDATE_SCHOLAR_FAILURE] = createRequestActionTypes('scholarship/UPDATE_NOTICE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value })=>({
    key,
    value,
}));
export const addScholar = createAction(ADD_SCHOLAR, content=>content);
export const setOriginal = createAction(SET_ORIGINAL, scholarship=>scholarship);
export const updateScholar = createAction(UPDATE_SCHOLAR, ({id, title, body})=>({id, title, body}));

const addScholarSaga = createRequestSaga(ADD_SCHOLAR, scholarAPI.registerScholarship);
const updateScholarSaga = createRequestSaga(UPDATE_SCHOLAR, scholarAPI.updateScholarship);
export function* ScholarSaga(){
    yield takeLatest(ADD_SCHOLAR, addScholarSaga);
    yield takeLatest(UPDATE_SCHOLAR, updateScholarSaga);
}

const initialState = {
    content:{
        scholarName:'',
        startDate:null,
        dueDate:null,
        sum:null,
        numberOfPeople:null,
        startSemester:null,
        endSemester:null,
        file:null,
    },
    scholarship:null,
    scholarshipError:null,
    originalScholarshipId:null,
};

const Scholarship = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [CHANGE_FIELD]:(state, { payload: { key, value } }) => 
            produce(state, draft=>{
                draft['content'][key]=value;
            }),
        [ADD_SCHOLAR]:state=>({
            ...state,
            scholarship:null,
            scholarshipError:null,
        }),
        [ADD_SCHOLAR_SUCCESS]:(state, { payload:scholarship })=>({
            ...state,
            scholarship,
        }),
        [ADD_SCHOLAR_FAILURE]:(state, { payload:scholarshipError })=>({
            ...state,
            scholarshipError,
        }),
        [SET_ORIGINAL]:(state, { payload:originalScholarship })=>({
            ...state,
            title:originalScholarship.title,
            body:originalScholarship.body,
            originalScholarshipId:originalScholarship.id,
        }),
        [UPDATE_SCHOLAR_SUCCESS]: (state, { payload: scholarship })=>({
            ...state,
            scholarship,
        }),
        [UPDATE_SCHOLAR_FAILURE]: (state, { payload: scholarshipError })=>({
            ...state,
            scholarshipError,
        })
    },
    initialState,
)

export default Scholarship;