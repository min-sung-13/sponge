import React from 'react';
import {useDispatch, useSelector} from 'react-redux';




const ProjectItem=({coupon}) => {

    const {u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate } = coupon;
   
     return(
           <tbody>
               <tr>
                 <td>
                   {u_id}
                 </td>
                 <td>
                   {coupon_name}
                 </td>
                 <td>
                   {coupon_explain}
                 </td>
                 <td>
                   {coupon_minpaymoney}
                 </td>
                 <td>
                  {coupon_price}
                 </td>
                 <td className="text-r">
                   {coupon_enddate}
                </td>
            </tr>        
        </tbody>
        )}



const CouponList = ({coupons, error, loading}) => {


  if(error) {
    return <p>에러발생이요</p>
  }
  return(
    <div className="card-body">
          
    {!loading && notices && (
        <div className="table-responsive">
           <table className="table">
          <thead className=" text-primary">
      <tr>
        <th>
          유저 아이디
        </th>
        <th>
          쿠폰이름
        </th>
        <th>
          쿠폰설명
        </th>
        <th>
          쿠폰 필요 최저가격
        </th>
        <th>
          쿠폰 할인가격
        </th>
        <th className="text-r">
          쿠폰 사용 마감일
        </th>
      </tr>
    </thead>
    {coupons.map(coupon => (
        <CouponItem coupon={coupon} key = {coupon._id} />
    ))}
    </table>  
    </div>
    )}
    </div>
  
  
    );


}

export default CouponList;