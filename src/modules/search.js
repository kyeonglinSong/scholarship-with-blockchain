import { createAction, handleActions } from 'redux-actions';


const CHANGE_FIELD = 'search/CHANGE_FIELD';
const CHANGE_ORDER = 'search/CHANGE_ORDER';
const CHANGE_SEMESTER = 'search/CHANGE_SEMESGER';
const INITIALIZE = 'search/INITIALIZE';

export const changeField = createAction(CHANGE_FIELD, searchWord=>searchWord);

export const changeOrder = createAction(CHANGE_ORDER, orderBase=>orderBase);

export const changeSemester = createAction(CHANGE_SEMESTER, semester=>semester);

export const initialize = createAction(
    INITIALIZE,
);

const initialState = {
    searchWord:'',
    orderBase:null,
    semester:'',
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
        })
    },
    initialState,
)

export default search;