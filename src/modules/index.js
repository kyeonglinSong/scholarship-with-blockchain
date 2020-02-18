import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading'
import register from './register'
import user, { userSaga } from './user'
import applies, { appliesSaga } from './applyList';
import applyDetail, { applyDetailSaga } from './applyDetail';
import write from './write';
import scholars, { scholarsSaga } from './scholarList'
import scholarDetail, { scholarSaga } from './scholarDetail'
import Scholarship, { ScholarSaga } from './addScholar';
import search from './search';
import students, { StudentsSaga } from './selection';


const rootReducer = combineReducers({
    auth,
    loading,
    register,
    user,
    applies,
    applyDetail,
    write,
    scholars,
    scholarDetail,
    Scholarship,
    search,
    students,
});

export function* rootSaga(){
    yield all([authSaga(), userSaga(), appliesSaga(), applyDetailSaga(), scholarsSaga(), scholarSaga(),
                ScholarSaga(), StudentsSaga(),]);
}

export default rootReducer;