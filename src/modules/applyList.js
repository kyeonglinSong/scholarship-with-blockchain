import { createAction, handleActions } from 'redux-actions';

const SET_PAGE='applyList/SET_PAGE';
const SET_TOKEN=('applyList/SET_TOKEN');
const NEXT_PAGE=('applyList/NEXT_PAGE');
const PREV_PAGE=('applyList/PREV_PAGE');
const ADD_APPLY='applyList/ADD_APPLY'

export const setToken = createAction(SET_TOKEN);
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);
export const setPage=createAction(SET_PAGE);
export const addApply = createAction(ADD_APPLY);

const exampleApplies=[
  {
    "applyingId": 1,
    "scholarName": "선배라면",
    "scholarId": 1,
    "state": "applyDone",
    "studentName": "김금별",
    "studentId": 1401110,
    "schoolId": "이화여자대학교",
    "completeSemester": 7,
    "priorGrade": 3.4,
    "tuition": 400,
    "college": "인문과학대학",
    "major": "철학과"
  },
  {
    "applyingId": 2,
    "scholarName": "EGPP",
    "scholarId": 2,
    "state": "applyDone",
    "studentName": "손민수",
    "studentId": 1734212,
    "schoolId": "이화여자대학교",
    "completeSemester": 4,
    "priorGrade": 3.9,
    "tuition": 400,
    "college": "경영대학",
    "major": "경영학과"
  },
  {
    "applyingId": 3,
    "scholarName": "이화미래설계",
    "scholarId": 3,
    "state": "returned",
    "studentName": "박민주",
    "studentId": 1802013,
    "schoolId": "이화여자대학교",
    "completeSemester": 5,
    "priorGrade": 2.1,
    "tuition": 450,
    "college": "조형예술대학",
    "major": "패션디자인과"
  },
  {
    "applyingId": 4,
    "scholarName": "신라면",
    "scholarId": 4,
    "state": "unselected",
    "studentName": "윤상희",
    "studentId": 1482392,
    "schoolId": "이화여자대학교",
    "completeSemester": 8,
    "priorGrade": 2.7,
    "tuition": 500,
    "college": "엘텍공과대학",
    "major": "사이버보안"
  },
  {
    "applyingId": 5,
    "scholarName": "농심장학금",
    "scholarId": 5,
    "state": "unselected",
    "studentName": "한정란",
    "studentId": 1605184,
    "schoolId": "이화여자대학교",
    "completeSemester": 4,
    "priorGrade": 3.6,
    "tuition": 300,
    "college": "신산업융합대학",
    "major": "국제사무학과"
  },
  {
    "applyingId": 6,
    "scholarName": "이화복지",
    "scholarId": 6,
    "state": "selected",
    "studentName": "김쿠키",
    "studentId": 1715132,
    "schoolId": "이화여자대학교",
    "completeSemester": 5,
    "priorGrade": 3.2,
    "tuition": 300,
    "college": "자연과학대학",
    "major": "수학과"
  },
  {
    "applyingId": 7,
    "scholarName": "EGPP",
    "scholarId": 2,
    "state": "unselected",
    "studentName": "위하나",
    "studentId": 1993281,
    "schoolId": "이화여자대학교",
    "completeSemester": 8,
    "priorGrade": 2,
    "tuition": 300,
    "college": "사범대학",
    "major": "교육공학과"
  },
  {
    "applyingId": 8,
    "scholarName": "신라면",
    "scholarId": 4,
    "state": "selected",
    "studentName": "윤우주",
    "studentId": 1672202,
    "schoolId": "이화여자대학교",
    "completeSemester": 4,
    "priorGrade": 2.1,
    "tuition": 450,
    "college": "인문과학대학",
    "major": "불어불문과"
  },
  {
    "applyingId": 9,
    "scholarName": "이화복지",
    "scholarId": 6,
    "state": "applyDone",
    "studentName": "김민지",
    "studentId": 1514358,
    "schoolId": "이화여자대학교",
    "completeSemester": 2,
    "priorGrade": 3,
    "tuition": 450,
    "college": "경영대학",
    "major": "경영학과"
  },
  {
    "applyingId": 10,
    "scholarName": "선배라면",
    "scholarId": 1,
    "state": "returned",
    "studentName": "윤희영",
    "studentId": 1724050,
    "schoolId": "이화여자대학교",
    "completeSemester": 4,
    "priorGrade": 3.7,
    "tuition": 300,
    "college": "신산업융합대학",
    "major": "국제사무학과"
  }
 ]

const initialState={
    applies:exampleApplies,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
}

const applies = handleActions(
    {
        [SET_TOKEN]:(state,{ payload:token })=>({
            ...state,
            token,
        }),
        [SET_PAGE]:(state)=>({
            ...state,
            lastPage: parseInt((state.applies.length)/10)+1,
            total:parseInt(state.applies.length)+1,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
        [ADD_APPLY]:(state, { payload:applies})=>({
          ...state,
          applies,
        })
    },
    initialState,
);

export default applies;