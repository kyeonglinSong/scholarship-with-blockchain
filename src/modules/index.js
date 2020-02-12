import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading'
import register from './register'
import user, { userSaga } from './user'
import notice, { noticeSaga } from './notice';
import notices, { noticesSaga } from './noticeList';
import applies, { appliesSaga } from './applyList';
import applyDetail, { applyDetailSaga } from './applyDetail';
import write, { writeSaga } from './write';
import scholars, { scholarsSaga } from './scholarList';
import scholarDetail, { scholarSaga } from './scholarDetail';
import Scholarship, { ScholarSaga } from './school/scholarship';

const rootReducer = combineReducers({
    auth,
    loading,
    register,
    user,
    notice,
    notices,
    applies,
    applyDetail,
    write,
    scholars,
    scholarDetail,
    Scholarship,
});

export function* rootSaga(){
    yield all([authSaga(), userSaga(), writeSaga(), noticeSaga(), noticesSaga(), appliesSaga(), applyDetailSaga(), scholarsSaga(), scholarSaga(), ScholarSaga(),]);
}

export default rootReducer;