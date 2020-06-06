import { createAction, handleActions } from 'redux-actions';


const SET_TOKEN='notice/SET_TOKEN';
const UNLOAD_NOTICE = 'notice/UNLOAD_POST';
const SET_ID = 'notice/SET_ID';
const SET_INFO = 'notice/SET_INFO';

export const setToken = createAction(SET_TOKEN);
export const unloadNotice = createAction(UNLOAD_NOTICE);
export const setId = createAction(SET_ID);
export const setInfo = createAction(SET_INFO);

const initialState = {
    //id:null,
    notice:null,
    error:null,
    //token:null,
    author:null,
    info:{
        noticeId:null,
        author:null,
        token:null,
    }
};

const notice = handleActions(
    {
        [UNLOAD_NOTICE]:()=>initialState,
        [SET_TOKEN]:(state,{ payload: token, author })=>({
            ...state,
            token,
            author,
        }),
        [SET_ID]:(state, { payload: id })=>({
            ...state,
            id,
        }),
        [SET_INFO]:(state, { payload:info })=>({
            ...state,
            info,
        })
    },
    initialState,
);

export default notice;