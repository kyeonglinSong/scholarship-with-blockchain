import { createAction, handleActions } from 'redux-actions';
import produce from 'immer/dist/immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const INITIALIZE = 'auth/INITIALIZE';
const LOGOUT = 'auth/LOGOUT';
const SET_USER = 'auth/SET_USER'

const SET_TEMP_USER='auth/SET_TEMP_USER';

export const setTempUser = createAction(SET_TEMP_USER, auth=>auth);

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
        [SET_TEMP_USER]:(state, { payload: auth })=>({
            ...state,
            auth
        }),
        [SET_USER]:(state, { payload:auth })=>({
            ...state,
            auth,
        }),
    },
    initialState,
);

export default auth;