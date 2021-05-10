import React from 'react';
import Moment from 'react-moment';
import $ from 'jquery';
import jQuery from 'jquery';
import 'bootstrap';
import AdvertiseActionButtonContainer from'../../../containers/advertise/AdvertiseActionButtonContainer';

window.$ = jQuery;
window.jQuery = jQuery;

/* 상세정보팝업 jquery */
jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}

$(function(){
  $(".ques_bt").on("click", function(){
    $(".pop_total").modal();
    $(".pop_total").center();
  });
});

$(function(){
    $(".btn_cancle").on("click", function(){
        $(".pop_total").css({"display":"none"});
    });
});

$(function(){      
  window.$(".content").on("click", function(){
    window.$(this).parent().parent().siblings(".pop_total-1").show()
    window.$(".pop_total-1").center();
  });
});

$(function(){
  $(".btn_cancle-1").on("click", function(){
      $(".pop_total-1").css({"display":"none"});
  });
});

const AdvertiseItem=({advertise}) => { 
  const {a_userid, a_title, a_content, a_color, a_img, a_startdate, a_enddate, a_price, a_allow}= advertise;
    
  console.log("광고 아이디: "+ advertise._id);
    return(
      <tbody>
        <tr>
          <td>
            {a_userid}
          </td>
          <td>
          <a href="#" className="content"> 
            {a_title}
            </a>
          </td>
          <td>
            {a_price}원
          </td>
          <td className="text-r">
            {a_allow === "N" ? <sapn>거부</sapn> : null} 
            {a_allow === "Y" ? <sapn>승인</sapn> : null} 
            {a_allow === "D" ? 
            <AdvertiseActionButtonContainer advertise={advertise} key={advertise._id} /> : null} 
          </td>
        </tr>
        <div className="pop_total-1">
        <div className="pop_total2">
          <div className="pop_top_total">
              <p className="pop_pro_info_name-1">광고 상세 정보</p>
              <div className="pop_profile_info">
                    <p>1. 광고 이미지:</p> 
                        <div className="pop_adv_img">
                            <img src={a_img} alt="광고 이미지" />
                        </div>
                    <p>
                      2. 광고 내용 : <br/>{a_content}
                    </p>
              </div>
          </div>
          <div className="pop_middle_total">
              <div className="pop_middle_top">
                <p>3. 광고 시작일 : <span><Moment format="YYYY/MM/DD">{a_startdate}</Moment></span></p>
                <p>4. 광고 마감일 : <span><Moment format="YYYY/MM/DD">{a_enddate}</Moment></span></p>
                <p>5. 광고 색 : <span>{a_color}</span></p>
              </div>
          </div>    
          <div className="popup_btn_cancle">
              <input type="button" value="닫기" className="btn_cancle-1"/>
          </div>
        </div>            
      </div>
      </tbody>
    )
}

const AdvertiseList=({advertises, error, loading}) => {
    if(error) {
        return <p>에러발생</p>
    }
    return(
      <div className="card-body">
        {!loading && advertises && (      
        <div className="table-responsive">
          <table className="table">
            <thead className=" text-primary">
                <th>
                    아이디
                </th>
                <th>
                    광고제목
                </th>
                <th>
                    광고 가격
                </th>
                <th>
                    수락 여부
                </th>
            </thead>
            {advertises.map((advertise) => 
              <AdvertiseItem advertise={advertise} key={advertise._id} />
            )}
          </table>
        </div>
          )}
      </div>


    )
}

export default AdvertiseList;