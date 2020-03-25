import { createAction, handleActions } from 'redux-actions';


const CHANGE_FIELD = 'search/CHANGE_FIELD';
const CHANGE_ORDER = 'search/CHANGE_ORDER';
const CHANGE_SEMESTER = 'search/CHANGE_SEMESGER';
const CHANGE_CHECK = 'search/CHANGE_CHECK'
const INITIALIZE = 'search/INITIALIZE';

export const changeField = createAction(CHANGE_FIELD, searchWord=>searchWord);

export const changeOrder = createAction(CHANGE_ORDER, orderBase=>orderBase);

export const changeSemester = createAction(CHANGE_SEMESTER, semester=>semester);

export const changeCheck = createAction(CHANGE_CHECK, possible=>possible);

export const initialize = createAction(
    INITIALIZE,
);

const initialState = {
    searchWord:'',
    orderBase:null,
    semester:'',
    possible:'',
};

const search = handleActions(
    {
        [CHANGE_FIELD]:(state, { payload:searchWord })=>({
            ...state,
            searchWord,
        }),
        [CHANGE_ORDER]:(state, { payload:orderBase })=>({
            ...state,
            orderBase,
        }),
        [CHANGE_SEMESTER]:(state, { payload:semester })=>({
            ...state,
            semester,
        }),
        [CHANGE_CHECK]:(state, { payload:possible })=>({
            ...state,
            possible,
        })
    },
    initialState,
)

export default search;