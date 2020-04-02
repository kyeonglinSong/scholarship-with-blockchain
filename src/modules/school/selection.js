import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes, createListRequestSaga } from '../../lib/createRequestSaga';
import * as selectionAPI from '../../lib/api/selection';

const SET_ID=('selection/SET_ID');
const SET_TOKEN=('selection/SET_TOKEN');
const [LIST_STUDENTS, LIST_STUDENTS_SUCCESS, LIST_STUDENTS_FAILURE]=createRequestActionTypes('selection/LIST_STUDENTS');
const STUDENT_STATE_CHANGE=('selection/STUDENT_STATE_CHANGE');
const NEXT_PAGE=('selection/NEXT_PAGE');
const PREV_PAGE=('selection/PREV_PAGE');
const [SAVE_SELECTION, SAVE_SELECTION_SUCCESS, SAVE_SELECTION_FAILURE]=createRequestActionTypes('selection/SAVE_SELECTION');
const [CLOSE_SCHOLAR, CLOSE_SCHOLAR_SUCCESS, CLOSE_SCHOLAR_FAILURE]=createRequestActionTypes('selection/CLOSE_SCHOLAR');
const [GET_STATE, GET_STATE_SUCCESS, GET_STATE_FIALURE]=createRequestActionTypes('selection/GET_STATE');

export const setToken = createAction(SET_TOKEN);
export const setScholarId = createAction(SET_ID, ScholarId=>ScholarId);
export const listStudents = createAction(LIST_STUDENTS, ({ScholarId, token})=>({ScholarId, token}));
export const getScholarState = createAction(GET_STATE, ScholarId=>ScholarId);
export const studentStateChange = createAction(STUDENT_STATE_CHANGE, ({students, token})=>({students, token}));
export const saveSelection = createAction(SAVE_SELECTION, ({student, token})=>({student, token}));
export const closeScholar = createAction(CLOSE_SCHOLAR, ({ScholarId, token})=>({ScholarId, token}));
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);

const listStudentsSaga = createRequestSaga(LIST_STUDENTS, selectionAPI.readStudentList);
const saveSelectionSaga = createRequestSaga(SAVE_SELECTION, selectionAPI.saveStudent);
const closeScholarSaga = createRequestSaga(CLOSE_SCHOLAR, selectionAPI.closeScholarship);
const getScholarStateSaga = createRequestSaga(GET_STATE, selectionAPI.getScholarState);

export function* StudentsSaga(){
    yield takeLatest(LIST_STUDENTS, listStudentsSaga);
    yield takeLatest(SAVE_SELECTION, saveSelectionSaga);
    yield takeLatest(CLOSE_SCHOLAR, closeScholarSaga);
    yield takeLatest(GET_STATE, getScholarStateSaga);
}

const initialState={
    ScholarId:'',
    students:null,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    student:null,
    scholarstate:null,
    token:null,
}

const students = handleActions(
    {
        [SET_ID]:(state, { payload:ScholarId })=>({
            ...state,
            ScholarId,
        }),
        [SET_TOKEN]:(state,{ payload:token })=>({
            ...state,
            token,
        }),
        [LIST_STUDENTS_SUCCESS]:(state, { payload:students })=>({
            ...state,
            students,
            lastPage: parseInt((students.length)/10),
            total:parseInt(students.length),
        }),
        [LIST_STUDENTS_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        }),
        [GET_STATE_SUCCESS]:(state, { payload:scholarstate })=>({
            ...state,
            scholarstate,
        }),
        [GET_STATE_FIALURE]:(state, { payloae:error })=>({
            ...state,
            error,
        }),
        [CLOSE_SCHOLAR_SUCCESS]:(state, { payload:scholarstate })=>({
            ...state,
            scholarstate,
        }),
        [CLOSE_SCHOLAR_FAILURE]:(state, { payload:error })=>({
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
        [STUDENT_STATE_CHANGE]:(state, { payload:students })=>({
            ...state,
            students,
        }),
        [SAVE_SELECTION_SUCCESS]:(state, { payload:student })=>({
            ...state,
            student,
        }),
        [SAVE_SELECTION_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        })

    },
    initialState,
);

export default students;