import { createAction, handleActions } from 'redux-actions';
import produce from 'immer/dist/immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const INITIALIZE = 'auth/INITIALIZE';
const LOGOUT = 'auth/LOGOUT';
const SET_USER = 'auth/SET_USER'

const [EMPLOYEE_LOGIN, EMPLOYEE_LOGIN_SUCCESS, EMPLOYEE_LOGIN_FAILURE] = createRequestActionTypes('auth/EMPLOYEE_LOGIN');
const [STUDENT_LOGIN, STUDENT_LOGIN_SUCCESS, STUDENT_LOGIN_FAILURE] = createRequestActionTypes('auth/STUDENT_LOGIN');


export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({
        key,
        value,
    }),
);

export const changeToggle = createAction(CHANGE_FIELD, type=>type);

export const initializeForm = createAction(
    INITIALIZE_FORM,
);

export const initialize = createAction(INITIALIZE);

export const logout = createAction(
    LOGOUT,
);

export const setUser = createAction(SET_USER, auth=>auth);

export const employee_login = createAction(EMPLOYEE_LOGIN, ({userId, password})=>({
    userId,
    password
}));

export const student_login = createAction(STUDENT_LOGIN, ({userId, password})=>({
    userId,
    password
}));

const employee_loginSaga = createRequestSaga(EMPLOYEE_LOGIN, authAPI.employeelogin);
const student_loginSaga = createRequestSaga(STUDENT_LOGIN, authAPI.studentlogin);

export function* authSaga(){
    yield takeLatest(EMPLOYEE_LOGIN, employee_loginSaga);
    yield takeLatest(STUDENT_LOGIN, student_loginSaga);
}

const initialState = {
    form:{
        userId:'',
        password:'',
        type:'',
    },
    auth:null,
    authError:null,
};

const initialForm={
    form:{
        userId:'',
        password:'',
        type:'',
    }
}


const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: {key, value} }) => 
        produce(state, draft=>{
            draft['form'][key]=value;
        }),
        [INITIALIZE_FORM]: (state)=>({
            ...state,
            initialState,
        }),
        [INITIALIZE]:(state)=>({
            ...state,
            form:initialForm,
        }),
        [LOGOUT]:(state)=>({
            ...state,
            auth:null,
            isStudent:null,
        }),
        [SET_USER]:(state, { payload:auth })=>({
            ...state,
            auth,
        }),
        [EMPLOYEE_LOGIN_SUCCESS]: (state, { payload:auth })=>({
            ...state,
            authError:null,
            auth,
        }),
        [EMPLOYEE_LOGIN_FAILURE]: (state, { payload:error }) =>({
            ...state,
            authError:error,
        }),
        [STUDENT_LOGIN_SUCCESS]: (state, { payload:auth })=>({
            ...state,
            authError:null,
            auth,
        }),
        [STUDENT_LOGIN_FAILURE]: (state, { payload:error }) =>({
            ...state,
            authError:error,
        }),
    },
    initialState,
);

export default auth;