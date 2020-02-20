import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading'
import register from './register'
import notice, { noticeSaga } from './notice';
import notices, { noticesSaga } from './noticeList';
import applies, { appliesSaga } from './applyList';
import applyDetail, { applyDetailSaga } from './applyDetail';
import write, { writeSaga } from './write';
import scholars, { scholarsSaga } from './scholarList';
import scholarDetail, { scholarSaga } from './scholarDetail';
import Scholarship, { ScholarSaga } from './school/scholarship';
import students, { StudentsSaga } from './school/selection';
import search from './search';

const rootReducer = combineReducers({
    auth,
    loading,
    register,
    notice,
    notices,
    applies,
    applyDetail,
    write,
    scholars,
    scholarDetail,
    Scholarship,
    students,
    search,
});

export function* rootSaga(){
    yield all([authSaga(), writeSaga(), noticeSaga(), noticesSaga(), appliesSaga(), applyDetailSaga(), 
        scholarsSaga(), scholarSaga(), ScholarSaga(), StudentsSaga(),]);
}

export default rootReducer;