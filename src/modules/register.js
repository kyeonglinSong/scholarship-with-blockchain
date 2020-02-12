import { createAction, handleActions } from 'redux-actions';
import produce from 'immer/dist/immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('register/REGISTER');

export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({
        key,
        value,
    }),
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
    form=>form
);

export const register = createAction(REGISTER, ({email, password})=>({
    email,
    password
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
export function* authSaga(){
    yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
    email:'',
    password:'',
    auth:null,
    authError:null,
};

const Register = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: {key, value} }) => 
        produce(state, draft=>{
            draft[key]=value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form })=>({
            ...state,
            initialState,
        }),
        [REGISTER_SUCCESS]: (state, { payload:auth })=>({
            ...state,
            authError:null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, { payload:error }) =>({
            ...state,
            authError:error,
        }),
    },
    initialState,
);

export default Register;