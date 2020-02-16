import { createAction, handleActions } from 'redux-actions';


const CHANGE_FIELD = 'search/CHANGE_FIELD';
const INITIALIZE = 'search/INITIALIZE';

export const changeField = createAction(CHANGE_FIELD, searchWord=>searchWord);

export const initialize = createAction(
    INITIALIZE,
);

const initialState = {
    searchWord:''
};

const search = handleActions(
    {
        [CHANGE_FIELD]:(state, { payload:searchWord })=>({
            searchWord,
        }),
    },
    initialState,
)

export default search;