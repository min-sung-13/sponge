import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import CouponList from '../../components/common/coupounList/CouponList';
import  {listCoupons} from '../../modules/coupons';


const CouponListContainer =({location}) => {
    const dispatch = useDispatch();
    const {coupons, error, loading} = useSelector(
        ({coupons, loading}) => ({
            coupons: coupons.coupons,
            error: coupons.error,
            loading: loading['coupon/LIST_COUPONS'],
          
        })
    );

    useEffect(() => {
        const {u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listCoupons({u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate, page}))
    },[dispatch, location.search]);



        console.log(notices+"컨테이너리스트");
        
        return (
            <CouponList
                loading={loading}
                error={error}
                coupons={coupons}
                
            />
            )
    
}

export default withRouter(CouponListContainer);