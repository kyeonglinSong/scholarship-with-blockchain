import { createAction, handleActions } from 'redux-actions';


const INITIALIZE = 'write/INITIALIZE';
const SET_TOKEN='write/SET_TOKEN';
const SET_INFO= 'writ/SET_INFO';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const setToken = createAction(SET_TOKEN, info=>info);
export const setInfo = createAction(SET_INFO, info=>info);
export const changeField = createAction(CHANGE_FIELD, ({ key, value })=>({
    key,
    value,
}));

var initialState = {
    title:'',
    body:'',
    notice:null,
    noticeError:null,
    token:null,
    author:null,
    originalNoticeId:null,
};


const write = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [SET_TOKEN]:(state,{ payload:info })=>({
            ...state,
            token:info.token,
            author:info.author,
        }),
        [SET_INFO]:(state, { payload:original })=>({
            ...state,
            title:original.title,
            body:original.content,
            author:original.author,
        }),
        [CHANGE_FIELD]:(state, { payload: { key, value } }) => ({
            ...state,
            [key]:value,
        }),
    },
    initialState,
)

export default write;