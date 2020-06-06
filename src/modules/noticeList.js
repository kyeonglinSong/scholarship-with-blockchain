import { createAction, handleActions } from 'redux-actions';


const NEXT_PAGE=('noticeList/NEXT_PAGE');
const PREV_PAGE=('noticeList/PREV_PAGE');
const ADD_NOTICE='noticeList/ADD_NOTICE';
const SET_PAGE='noticeList/SET_PAGE';
const SET_ORIGINAL='notideList/SET_ORIGINAL';

export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);
export const setPage = createAction(SET_PAGE);
export const addNotice = createAction(ADD_NOTICE);
export const setOriginal = createAction(SET_ORIGINAL);

const exampleNotice=[
    {
        "id": "1",
        "title": "(필독)장학금 신청시 유의사항",
        "content": "(필독)장학금 신청시 유의사항",
        "author": "김직원",
        "modifiedDate": "2020-05-10"
      },
      {
        "id": "2",
        "title": "신라면장학금",
        "content": "신라면장학금",
        "author": "이직원",
        "modifiedDate": "2020-06-01"
      },
      {
        "id": "3",
        "title": "선배라면장학금",
        "content": "선배라면장학금",
        "author": "최직원",
        "modifiedDate": "2020-06-05"
      },
      {
        "id": "4",
        "title": "개인정보동의내역 확인",
        "content": "개인정보동의내역 확인",
        "author": "홍직원",
        "modifiedDate": "2020-05-10"
      },
      {
        "id": "5",
        "title": "무지개장학금",
        "content": "무지개장학금",
        "author": "박직원",
        "modifiedDate": "2020-06-03"
      },
      {
        "id": "6",
        "title": "엘리장학금",
        "content": "엘리장학금",
        "author": "한직원",
        "modifiedDate": "2020-05-13"
      },
      {
        "id": "7",
        "title": "무지개장학금",
        "content": "무지개장학금",
        "author": "강직원",
        "modifiedDate": "2020-05-17"
      },
      {
        "id": "8",
        "title": "선배라면장학금",
        "content": "선배라면장학금",
        "author": "오직원",
        "modifiedDate": "2020-05-18"
      },
      {
        "id": "9",
        "title": "신라면장학금",
        "content": "신라면장학금",
        "author": "부직원",
        "modifiedDate": "2020-05-15"
      }
]


var initialState={
    notices:exampleNotice,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
    author:null,
    originalNoticeId:null,
}

const notices = handleActions(
    {
        [SET_PAGE]: (state)=>({
            ...state,
            lastPage: parseInt((state.notices.length)/10)+1,
            total:parseInt(state.notices.length)+1,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
        [ADD_NOTICE]:(state, { payload:notices })=>({
            ...state,
            notices
        }),
        [SET_ORIGINAL]:(state, { payload:id })=>({
          ...state,
          originalNoticeId:id
        }),
    },
    initialState,
);

export default notices;