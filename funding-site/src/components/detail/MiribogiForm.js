import React from 'react';
import '../../scss/mingcss.css';
import logo from '../../image/project8.jpg';
import {FiShare2} from 'react-icons/fi';
import {HiHeart} from 'react-icons/hi';
import { withRouter } from 'react-router-dom';
import {useLocation} from "react-router";


const MiribogiForm = () =>{
    const location = useLocation();
    const state = location.state;   
    console.log('state : ' + JSON.stringify(state));
    return(         
        <div className="detail">
        <div className="inner_box padding_zero">
            <div className="make_relative">
                <div className="title_content">
                    <div className="title_all_text_zone">
                        <div className="title_cate"><span>{state.p_cate}</span></div>
                        <div className="title_text">{state.p_title}</div>
                        <div className="title_last_logo"><img src={logo} className="maker_logo" alt="이미지"/>{state.p_maker.m_name}</div>
                    </div>
                    <div className="title_img_left">
                        <div className="title_img_div"><img src={state.p_img} alt="사진1"/>
                        </div>
                    </div>
                    <div className="title_img_right">
                        <div className="text_box">
                            <p>모인금액</p>
                            <p><span className="big_size">3,930,000</span>원 <span className="middle">393%</span></p>
                        </div>
                        <div className="text_box">
                            <p>남은시간</p>
                            <p><span className="big_size">{
                                    Math.floor((new Date(state.p_lastDate) - new Date()) / (1000*60*60*24)) + 1
                            }</span>일</p>
                        </div>
                        <div className="text_box">
                            <p>후원자</p>
                            <p><span className="big_size">134</span>명</p>
                        </div>
                        <div className="gray_box">
                            <p className="text_bold">펀딩 진행중</p>
                            <p>목표 금액인 {state.p_project.p_target}원이 모여야만 결제됩니다.<br/>결제는 종료일에 다함께 진행됩니다.</p>
                        </div>
                        <div className="detail_btn_zone">
                            <div className="bottom_btn_1">
                                <input type="button" value="프로젝트 펀딩하기" className="punding_btn"/>
                            </div>
                            <div className="bottom_btn">
                                <div>문의하기</div>
                                <div><HiHeart size="26" color="#FB516E"/></div>
                                <div><FiShare2 size="24"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="detail_bar" id="detail_bar">
            <div className="inner_box padding_zero">
                <div>스토리</div>
                <div>펀딩안내</div>
            </div>
        </div>
        <div className="gray_background">
            <div className="inner_box padding_zero">
                <div className="story" id="story">
                    <div className="story_zone">
                        {state.p_story}
                    </div>
                        <input type="button" value="스토리 더보기" className="story_button" id="more_story"/>
                        <input type="button" value="스토리 접기" className="story_button" id="close_story"/>
                </div>
                <div className="right_makerAndPresent">
                    <div className="maker" id="maker">
                        <p className="text_bold">창작자 소개</p>
                        <p className="text_bold2 text_bold"><img src={logo} alt="로고이미지" className="maker_logo"/>{state.p_maker.m_name}</p>
                        <p className="maker_content">{state.p_maker.m_intro}</p>
                        <p><input type="button" value="제작자에게 문의하기" className="maker_mun"/></p>
                    </div>
                    <div className="mi_text">선물 선택</div>
                    <div className="right_maApre_bottom" id="present_div">
                        <div className="present">
                            {state.p_project.p_present.map(present =>(
                                <div className="pre_div">
                                    <h2>{present.pr_price} +</h2>
                                    <p className="price_detail">{present.pr_name}</p>
                                    <ul id="use_decoration">
                                        {present.pr_gusung.map(g => (
                                            <li>{g}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="empty_zone"> </div>
            </div>
        </div>
    </div>
    );
        
}

export default withRouter(MiribogiForm);
