
import React, {useCallback, useEffect, useState} from 'react';
import WriteActionButtonContainer from '../../../containers/write/WriteActionButtonContainer'
import {changeField} from '../../../modules/write';
import {useSelector, useDispatch} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




const CouponAdd = ({ u_id, couponname, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate  }) => {
  const dispatch = useDispatch();

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    
    const onChangeTitle = e => {
        onChangeField({key: 'couponname', value: e.target.value});
    }

    const onChangePrice = e => {
        onChangeField({key: 'coupon_price', value: e.target.value});
    }

    const onChangeCouponId = e => {
        onChangeField({key: 'u_id', value: e.target.value});
    }

    const onChangeExplain = e => {
        onChangeField({key: 'coupon_explain', value: e.target.value});
    }
    
    const onChangeMinpaymoney = e => {
      onChangeField({key: 'coupon_minpaymoney', value: e.target.value});
    }

    
  
    const Calender = () => {
        const [endDate, setEndDate] = useState(new Date());
        return (
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        );
      };
    


    
    





    return(
        <div className="noti-write">
          <form>
          <div className="pop_total2">
            <div className="pop_top_total">
                <div className="pop_profile_info">
                    <p className="coupon_pro_info_name">쿠폰등록</p>
                </div>
            </div>
            <div>
                <p>쿠폰명 : <input type="text" className="couponTitle" name="couponTitle" onChange={onChangeTitle}  /></p>
                <p> 쿠폰 할인가격 : <select className="couponSelect" name="couponSelect"  onChange={onChangePrice} >
                    <option value={3000}>3000원</option>
                    <option value={5000}>5000원</option>
                    <option value={7000}>7000원</option>
                    <option value={10000}>10000원</option>
                  </select>
                </p>
                <p>쿠폰 설명 : 
              <textarea cols="60" rows="20" name="couponCreateContent"
              onChange={onChangeExplain}></textarea>
              </p>
              <p>사용가능 최저 금액 : <input type="text" className="couponTitle" name="couponTitle" onChange={onChangeTitle}  /></p>
              <p>쿠폰받는 계정 : <input type="text" className="couponId" name="couponId" onChange={onChangeMinpaymoney}  /></p>
              <p>쿠폰 사용 마감일 : 
              <Calender />
              </p>
            </div>
          </div>
          </form>
          <WriteActionButtonContainer />  
      </div>
    )
};

export default CouponAdd;
