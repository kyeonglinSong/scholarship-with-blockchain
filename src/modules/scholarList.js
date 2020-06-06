import { createAction, handleActions } from 'redux-actions';

const NEXT_PAGE=('scholarList/NEXT_PAGE');
const PREV_PAGE=('scholarList/PREV_PAGE');
const ADD_SCHOLAR='scholarList/ADD_SCHOLAR';
const SET_PAGE='scholarList/SET_PAGE';

export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);
export const setExampleScholar = createAction(ADD_SCHOLAR, scholars=>scholars);
export const setPage=createAction(SET_PAGE);
export const addScholar = createAction(ADD_SCHOLAR);


const exampleScholar=[
    {"scholarId":"1","scholarName":"선배라면","foundation":"이화여자대학교","sum":200,"num":50,"dueDate":"2020-03-10","semesterStart":1,"semesterEnd":8,"majorLimit":"","gradeLimit":null},
    {"scholarId":"2","scholarName":"EGPP","foundation":"이화여자대학교","sum":350,"num":50,"dueDate":"2020-03-15","semesterStart":4,"semesterEnd":5,"majorLimit":"","gradeLimit":3.3},
    {"scholarId":"3","scholarName":"이화미래설계","foundation":"이화여자대학교","sum":110,"num":50,"dueDate":"2020-03-15","semesterStart":1,"semesterEnd":8,"majorLimit":"","gradeLimit":null},
    {"scholarId":"4","scholarName":"신라면","foundation":"농심","sum":350,"num":50,"dueDate":"2020-03-15","semesterStart":1,"semesterEnd":2,"majorLimit":"","gradeLimit":null},
    {"scholarId":"5","scholarName":"농심장학금","foundation":"농심","sum":120,"num":50,"dueDate":"2020-03-15","semesterStart":1,"semesterEnd":4,"majorLimit":"식품영양학과","gradeLimit":3},
    {"scholarId":"6","scholarName":"이화복지","foundation":"이화여자대학교","sum":180,"num":50,"dueDate":"2020-02-29","semesterStart":1,"semesterEnd":8,"majorLimit":"","gradeLimit":null},
    {"scholarId":"7","scholarName":"김활란장학금","foundation":"이화여자대학교","sum":290,"num":50,"dueDate":"2020-02-27","semesterStart":6,"semesterEnd":8,"majorLimit":"","gradeLimit":null},
    {"scholarId":"8","scholarName":"오리온장학금","foundation":"오리온","sum":210,"num":50,"dueDate":"2020-03-25","semesterStart":6,"semesterEnd":8,"majorLimit":"","gradeLimit":null},
    {"scholarId":"9","scholarName":"아몬드장학금","foundation":"와사비","sum":260,"num":50,"dueDate":"2020-03-25","semesterStart":6,"semesterEnd":8,"majorLimit":"","gradeLimit":null},
    {"scholarId":"10","scholarName":"엘리장학금","foundation":"은별","sum":170,"num":50,"dueDate":"2020-03-02","semesterStart":3,"semesterEnd":4,"majorLimit":"철학과","gradeLimit":null},
    {"scholarId":"11","scholarName":"무지개장학금","foundation":"이화여자대학교","sum":190,"num":50,"dueDate":"2020-03-05","semesterStart":3,"semesterEnd":4,"majorLimit":"","gradeLimit":null},
    {"scholarId":"12","scholarName":"찰떡장학금","foundation":"갱린","sum":320,"num":50,"dueDate":"2020-02-02","semesterStart":3,"semesterEnd":4,"majorLimit":"컴퓨터공학과","gradeLimit":null},
];

for(var i=0; i<exampleScholar.length; i++){
    exampleScholar[i].state='possible';
}

const initialState={
    scholars:exampleScholar,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
}

const scholars = handleActions(
    {
        [SET_PAGE]: (state)=>({
            ...state,
            lastPage: parseInt((state.scholars.length)/10)+1,
            total:parseInt(state.scholars.length)+1,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
        [ADD_SCHOLAR]:(state, { payload: scholars })=>({
            ...state,
            scholars
        })
    },
    initialState,
);

export default scholars;