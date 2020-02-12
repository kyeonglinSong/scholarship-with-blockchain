import { createAction, handleActions } from 'redux-actions';
import produce from 'immer/dist/immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const LOGOUT = 'auth/LOGOUT';
const SET_USER = 'auth/SET_USER'

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({
        key,
        value,
    }),
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
);

export const logout = createAction(
    LOGOUT,
);

export const setUser = createAction(SET_USER, auth=>auth);

export const login = createAction(LOGIN, ({email, password})=>({
    email,
    password
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga(){
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    form:{
        email:'',
        password:'',
    },
    auth:null,
    authError:null,
};

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
        [LOGOUT]:(state)=>({
            ...state,
            auth:null,
            isStudent:null,
        }),
        [SET_USER]:(state, { payload:auth })=>({
            ...state,
            auth,
        }),
        [LOGIN_SUCCESS]: (state, { payload:auth })=>({
            ...state,
            authError:null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, { payload:error }) =>({
            ...state,
            authError:error,
        }),
    },
    initialState,
);

export default auth;