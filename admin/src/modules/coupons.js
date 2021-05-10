import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as couponAPI from '../lib/api/coupon';
import { takeLatest } from 'redux-saga/effects';


const [
    LIST_COUPONS,
    LIST_COUPONS_SUCCES,
    LIST_COUPONS_FAILURE,
  
    
] = createRequestActionTypes('coupon/LIST_COUPONS');

export const listCoupons = createAction(
    LIST_COUPONS,
    ({ u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate}) => ({u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate})
);

const listCouponsSaga = createRequestSaga(LIST_COUPONS, couponAPI.listCoupon);
export function * couponsSaga(){
    yield takeLatest(LIST_COUPONS, listCouponsSaga);
}



const initialState = {
    coupon: null,
    error: null,
    lastPage: 1
}

const coupons = handleActions(
    {
        [LIST_COUPONS_SUCCES] : (state, { payload: coupons, meta: response}) => ({
            ...state,
            coupons,
            lastPage: parseInt(response.headers['last-page'], 10)
        }),
        [LIST_COUPONS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default coupons;