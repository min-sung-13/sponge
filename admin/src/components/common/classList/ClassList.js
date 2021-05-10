import React from 'react';
import Moment from 'react-moment';
import $ from 'jquery';
import jQuery from 'jquery';
import 'bootstrap';
import ClassListInfo from './ClassListInfo'
import ClassActionButtonContainer from '../../../containers/classList/ClassActionButtonContainer';
import PacPickActionButtonContainer from '../../../containers/classList/PacPickActionButtonContainer'

window.$ = jQuery;
window.jQuery = jQuery;


//import ProjectCheck from './ProjectCheck';

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
      $(".btn_cancle").on("click", function(){
          $(".pop_total").css({"display":"none"});
      });
  });

  $(function(){      
      window.$(".content").on("click", function(){
      window.$(this).parent().parent().siblings(".pop_total").show()
      window.$(".pop_total").center();
})
})


  $(function(){
      $(".btn_cancle-1").on("click", function(){
          $(".pop_total-1").css({"display":"none"});
      });
  });




const ClassItem=({lesson}) => {

    const {p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate, p_target, p_class, p_state, p_pick, p_img} = lesson;

  

    return(
        <tbody>
        <tr>
          <td>
          {p_maker.u_id}
          </td>
          <td>
            <a href="#" className="content">  
                  {p_title}
            </a>
          </td>
          <td>
            {p_explain}
          </td>
          <td className="text-r">
            {p_state === "N" ? <sapn>거부</sapn> : null} 
            {p_state === "Y" ? <sapn>승인</sapn> : null} 
            {p_state === "D" ? 
            <ClassActionButtonContainer lesson={lesson} key={lesson._id}/> : null} 
          </td>
          <td className="text-r"> 
          {p_pick === "N" ? <span>거부</span> : null} 
            {p_pick === "Y" ? <span>승인</span> : null} 
            {p_pick === "D" ? 
            <PacPickActionButtonContainer lesson={lesson} key={lesson._id}/>: null} 
          </td>  
        </tr>
        <div className="pop_total-1">
          <div className="pop_total2">
            <div className="pop_top_total">
                <p className="pop_pro_info_name-1">프로젝트 상세정보</p>
                <div className="pop_profile_img">
                    <img src={p_img} alt=""/>
                </div>
                <div className="pop_profile_info">
                    <p>1. 창작자: <span>{p_maker.m_name}</span></p>
                    <p>2. 이메일 : <span>{p_maker.m_email}</span></p>
                </div>
            </div>
            <div className="pop_middle_total">
                <div className="pop_middle_top">
                    <p>3. 창작자 소개 : <br/>{p_maker.m_intro}</p>
                </div>
                <div className="pop_middle_mid">
                    <p>4. 클래스 기간</p>
                    <ul>
                        <li>클래스 시작일: 
                          <span>
                            <Moment format="YYYY/MM/DD">    
                              {p_startDate}
                            </Moment>  
                          </span>
                        </li>
                        <li>클래스 마감일: 
                          <span>
                            <Moment format="YYYY/MM/DD">  
                              {p_lastDate}
                            </Moment>
                          </span>
                        </li>
                    </ul>
                    <p></p>
                </div>
            </div>    
            <div className="pop_bottom_total">
                <div className="pop_bottom_top">
                  <p>5. 레슨 정보: </p>

                  {p_class.c_lesson.map((les) =>
                  
                  <ClassListInfo les={les} key={les._id}/>
                  )} 
                  </div>
                <div className="pop_bottom_bottom">
                  <p>6. 창작자 계좌 정보</p>
                  <ul>
                    <li>창작자 은행: <span>{p_maker.m_account.bankname}</span></li>
                    <li>창작자 계좌 번호 : <span>{p_maker.m_account.banknum}</span></li>
                  </ul> 
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

const ClassList = ({lessons, error, loading}) => {

    if(error) {
        return <p>에러발생</p>
    }
    return(
        <div className="card-body">
                    {!loading && lessons && (    
        <div className="table-responsive">
          <table className="table">
            <thead className=" text-primary">
              <th>
                창작자 아이디
              </th>
              <th>
                클래스 명
              </th>
              <th>
                클래스 요약
              </th>
              <th>
                수락 여부
              </th>
              <th>
                pick 여부
              </th>
            </thead>
            {lessons.filter((lesson) => {
                return lesson.p_type === "C"
            }).map((lesson) =>( 
            <ClassItem lesson={lesson} key={lesson._id} />
                ))}
          </table>
        </div>
        )}
      </div>
    )


}

export default ClassList;