import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading'
import notice from './notice';
import notices from './noticeList';
import applies from './applyList';
import applyDetail from './applyDetail';
import write from './write';
import scholars from './scholarList';
import scholarDetail from './scholarDetail';
import Scholarship from './school/scholarship';
import students from './school/selection';
import search from './search';

const rootReducer = combineReducers({
    auth,
    loading,
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


export default rootReducer;