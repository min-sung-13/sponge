import React from 'react';
import $ from 'jquery';
import Moment from 'react-moment';
import jQuery from 'jquery';
import 'bootstrap';
import ProjectListinfo from './ProjectListInfo';
import CheckActionButtonContainer from '../../../containers/project/CheckActionButtonContainer';
import PacPickActionButtonContainer from '../../../containers/project/PacPickActionButtonContainer';

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
  $(".ques_bt").on("click", function(){
    $(".pop_total").modal();
    $(".pop_total").center();
  })
})

  $(function(){
      $(".btn_cancle").on("click", function(){
          $(".pop_total").css({"display":"none"});
      });
  });

  $(function(){      
      window.$(".content").on("click", function(){
      window.$(this).parent().parent().siblings(".pop_total-1").show()
      window.$(".pop_total-1").center();
  })
})


  $(function(){
      $(".btn_cancle-1").on("click", function(){
          $(".pop_total-1").css({"display":"none"});
      });
  });



const ProjectItem=({project, error, loading}) => {

  const {p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate, p_project, p_img, p_state, p_pick, p_type } = project;

  console.log(p_state);

  return(
    <tbody>
      <tr>
        <td>
          {p_maker.u_id}
        </td>
        <td>
          <a href="#" className="content" project={project} key={project._id}>  
            {p_title}
          </a>
        </td>
        <td>
          {p_explain}
        </td>
        <td className="text-r"> 
          {p_state === "N" ? <span>거부</span> : null} 
          {p_state === "Y" ? <span>승인</span> : null} 
          {p_state === "D" ? <CheckActionButtonContainer
          project={project} key={project._id}/> : null}
        </td>
        <td className="text-r">  
          {p_pick === "N" ? <span>거부</span> : null} 
          {p_pick === "Y" ? <span>승인</span> : null} 
          {p_pick === "D" ? 
            <PacPickActionButtonContainer project={project} key={project._id} /> : null} 
        </td>
      </tr> 
      <div className="pop_total-1" >
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
              <p>3. 창작자 소개 :{p_maker.m_intro}</p>
            </div>
          <div className="pop_middle_mid">
            <p>4. 프로젝트 기간</p>
              <ul>
                <li>프로젝트 공개일: 
                  <span>
                    <Moment format="YYYY/MM/DD">
                      {p_startDate}
                    </Moment>  
                  </span>
                </li>
                <li>프로젝트 마감일: 
                  <span>
                    <Moment format="YYYY/MM/DD">
                      {p_lastDate}
                    </Moment>
                  </span>
                </li>
                <li>목표 금액: <span></span>원</li> 
              </ul>
            </div>
          </div>    
          <div className="pop_bottom_total">
            <div className="pop_bottom_top">
              <div>   
                <p>5. 선물 정보: </p>
                  {p_project.p_present.map((p_present)=>
                    <ProjectListinfo p_present={p_present} key={p_present._id}/> 
                  )}
              </div>
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

const ProjectList = ({projects, error, loading}) => {
    if(error) {
        return <p>에러발생</p>
    }
    return(
        <div className="card-body">
        {!loading && projects && (    
        <div className="table-responsive">
          <table className="table">
            <thead className=" text-primary">
              <th>
                창작자 아이디
              </th>
              <th>
                프로젝트 명
              </th>
              <th>
                프로젝트 요약
              </th>
              <th>
                수락 여부
              </th>
              <th>
                pick 여부
              </th>
            </thead>
            {projects.filter((project) => {
                return project.p_type === "P"
            }).map((project) =>( 
            <ProjectItem project={project} key={project._id} />
                ))}
          </table>
        </div>
        )}
        
      </div>


    )
}

export default ProjectList;


