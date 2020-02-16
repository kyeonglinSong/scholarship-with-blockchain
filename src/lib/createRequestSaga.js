import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type =>{
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
}

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action){
        yield put(startLoading(type)); //start loading
        try{
            console.log(action.payload);
            const response = yield call(request, action.payload);

            yield put({
                type: SUCCESS,
                payload: response.data,
                meta : response,
            });
        } catch(e){
            yield put({
                type:FAILURE,
                payload:e,
                error:true,
            });
        }
        yield put(finishLoading(type)); //end of loading
    };
}

export function createListRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action){
        yield put(startLoading(type)); //start loading
        try{
            console.log(action.payload[1]);
            const response=[];
            for(var i=0;i<action.payload.length;i++){
                response[i] = yield call(request, action.payload[i]);
            } 
            yield put({
                type: SUCCESS,
                payload: response.data,
                meta : response,
            });
        } catch(e){
            yield put({
                type:FAILURE,
                payload:e,
                error:true,
            });
        }
        yield put(finishLoading(type)); //end of loading
    };
}