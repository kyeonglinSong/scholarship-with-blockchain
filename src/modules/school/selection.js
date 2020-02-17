import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes, createListRequestSaga } from '../../lib/createRequestSaga';
import * as selectionAPI from '../../lib/api/selection';


const [LIST_STUDENTS, LIST_STUDENTS_SUCCESS, LIST_STUDENTS_FAILURE]=createRequestActionTypes('selection/LIST_STUDENTS');
const STUDENT_STATE_CHANGE=('selection/STUDENT_STATE_CHANGE');
const NEXT_PAGE=('selection/NEXT_PAGE');
const PREV_PAGE=('selection/PREV_PAGE');
const [SAVE_SELECTION, SAVE_SELECTION_SUCCESS, SAVE_SELECTION_FAILURE]=createRequestActionTypes('selection/LIST_STUDENTS');

export const listStudents = createAction(LIST_STUDENTS, ScholarId=>ScholarId);
export const studentStateChange = createAction(STUDENT_STATE_CHANGE, students=>students);
export const saveSelection = createAction(SAVE_SELECTION, students=>students);
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);

const listStudentsSaga = createRequestSaga(LIST_STUDENTS, selectionAPI.readStudentList);
const saveSelectionSaga = createRequestSaga(SAVE_SELECTION, selectionAPI.saveStudent);

export function* StudentsSaga(){
    yield takeLatest(LIST_STUDENTS, listStudentsSaga);
    yield takeLatest(SAVE_SELECTION, saveSelectionSaga);
}

const initialState={
    students:null,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
}

const students = handleActions(
    {
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
        [SAVE_SELECTION_SUCCESS]:(state, { payload:students })=>({
            ...state,
            students,
        }),
        [SAVE_SELECTION_FAILURE]:(state, { payload:error })=>({
            ...state,
            error,
        })

    },
    initialState,
);

export default students;