import { call,put } from 'redux-saga/effects';
import {startLoading,finishLoading} from '../modules/loading';

//modules/auth부분 이벤트처리
export const createRequestActionTypes = type =>{
    const SUCCESS= `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS,FAILURE];
}

export default function createRequestSaga(type,request){
    const SUCCESS= `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    
    return function * (action){
        yield put(startLoading(type))
        try{
            console.log('createRequestSaga진입성공')
            const response = yield call(request, action.payload);
            yield put({ //성공하면 타입은 석세스 payload는 받은데이터
                type: SUCCESS,
                payload: response.data
            })
            // console.log('createRequestSaga진입마무리성공')
        }catch(e){
            console.log('createRequestSaga진입실패')
            console.log(e)
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            })
        }
        yield put(finishLoading(type));
    }
}