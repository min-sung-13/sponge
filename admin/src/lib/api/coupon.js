import client from './client';
import qs from 'qs';



export const addCoupon = ({u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate}) => 
client.post('/api/coupon', {u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate});

export const listCoupon = ({u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate}) => {
    const queryString = qs.stringify({
        u_id, 
        coupon_name, 
        coupon_explain, 
        coupon_minpaymoney, 
        coupon_price, 
        coupon_enddate
    });
    return client.get(`/api/coupon${queryString}`);
}



