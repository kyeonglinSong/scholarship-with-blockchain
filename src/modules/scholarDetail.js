import { createAction, handleActions } from 'redux-actions';

const SET_SCHOLAR=('scholar/SET_SCHOLAR');
const UNLOAD_SCHOLAR = 'scholar/UNLOAD_POST';

export const unloadScholar = createAction(UNLOAD_SCHOLAR);
export const setScholar = createAction(SET_SCHOLAR, scholar=>scholar);

const initialState = {
    scholar:null,
    error:null,
    token:null,
};

const scholarDetail = handleActions(
    {
        [UNLOAD_SCHOLAR]:()=>initialState,
        [SET_SCHOLAR]:(state, { payload:scholar })=>({
            ...state,
            scholar:scholar
        }),
    },
    initialState,
);

export default scholarDetail;