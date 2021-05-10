import React, { useState } from 'react';
import '../../scss/mingcss.css';
import {FiShare2} from 'react-icons/fi';
import {HiHeart} from 'react-icons/hi';
import Recomend from '../common/Recomend';
import l1 from '../../image/like1.png';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Story from './Story';
import Anea from './Anea';
import styled from "styled-components";

const LoadingDiv = styled.div`
    width: 100%;
    display: inline-block;
    background-color: white;
    color: #3d3d3d;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    padding-top:200px;
    height: 400px;
    margin-bottom: 100px;
    box-sizing: border-box;
    @media(max-width: 1059px) {
        width:100%;
    }
`;

const ProjectDetailForm = ({pac, res, las}) =>{

    const obj = {
        0:<Story pac={pac}/>,
        1:<Anea pac={pac} las={las}/>
    }

    const [p, setP] = useState(0)

    const onClick = e => {
        setP(e.target.getAttribute('data'));
    }

    if(pac){
        if(res){
        var r = res;
        var price = 0;
        var people = 0;
        r = res.filter(k=> k.r_code === pac._id);
        for(var i =0; i< r.length; i++){
            price += r[i].r_price
        }
        for(var w =0; w< r.length; w++){
            people++;
        }
        return(         
            <div className="detail">
            <div className="inner_box padding_zero">
                <div className="make_relative">
                    <div className="title_content">
                        <div className="title_all_text_zone">
                            <div className="title_cate"><span>{pac.p_cate}</span></div>
                            <div className="title_text">{pac.p_title}</div>
                            <div className="title_last_logo"><img src={pac.p_maker.m_profile} className="maker_logo" alt="이미지"/>{pac.p_maker.m_name}</div>
                        </div>
                        <div className="title_img_left">
                            <div className="title_img_div">
                                {pac.p_video !== '' && pac.p_video.substring(0,4) ==='http' ? <ReactPlayer url={pac.p_video} controls width="650px" height="490px"/> : <img src={pac.p_img} alt="사진1" />}
                                
                            </div>
                        </div>
                        <div className="title_img_right">
                            <div className="text_box">
                                <p>모인금액</p>
                                <p>
                                    <span className="big_size">{price}</span>원
                                    {pac.p_type === "P" ? <span className="middle">{Math.floor(price/pac.p_project.p_target*100)}%</span> : '' }
                                </p>
                            </div>
                            <div className="text_box">
                                <p>남은시간</p>
                                <p>
                                    <span className="big_size">
                                        { Math.floor((new Date(pac.p_lastDate) - new Date()) / (1000*60*60*24)) + 1 }
                                    </span>일
                                </p>
                            </div>
                            <div className="text_box">
                                <p>후원자</p>
                                <p><span className="big_size">{people}</span>명</p>
                            </div>
                                {pac.p_type === "P" && (
                                    <div className="gray_box">
                                    <p className="text_bold">펀딩 진행중</p>
                                    <p>목표 금액인 {pac.p_project.p_target}원이 모여야만 결제됩니다.<br/>결제는 종료일에 다함께 진행됩니다.</p>
                                </div>
                                )}
                                {pac.p_type === "C" && (
                                    <div className="gray_box">
                                    <p className="text_bold">클래스 진행중</p>
                                    <p>정해진 기간안에 제작자가 정해놓은 수업을 들을 수 있습니다.결제는 수업일 바로 전에 진행됩니다.</p>
                                </div>
                                )}
                            <div className="detail_btn_zone">
                                {pac.p_type === "P" && (
                                    <div className="bottom_btn_1">
                                    <input type="button" value="프로젝트 펀딩하기" className="punding_btn"/>
                                    </div>
                                )}
                                {pac.p_type === "C" && (
                                    <div className="bottom_btn_1">
                                    <input type="button" value="클래스 신청하기" className="punding_btn"/>
                                </div>
                                )}

                                <div className="bottom_btn">
                                    <div>문의하기</div>
                                    <div><img src={l1}/></div>
                                    <div><FiShare2 size="24"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail_bar" id="detail_bar">
                <div className="inner_box padding_zero">
                    <div onClick={onClick} data="0">스토리</div>
                    <div onClick={onClick} data="1">안내</div>
                </div>
            </div>
            <div className="gray_background">
                <div className="inner_box padding_zero">
                    <div className="story" id="story">
                        <div>{obj[p]}</div>
                    </div>
                    <div className="right_makerAndPresent">
                        <div className="maker" id="maker">
                            <p className="text_bold">창작자 소개</p>
                            <p className="text_bold2 text_bold"><img src={pac.p_maker.m_profile} alt="로고이미지" className="maker_logo"/>{pac.p_maker.m_name}</p>
                            <p className="maker_content">{pac.p_maker.m_intro}</p>
                            <p><input type="button" value="제작자에게 문의하기" className="maker_mun"/></p>
                        </div>
                            {pac.p_type === "P" && (
                                <div className="mi_text">선물 선택</div>
                            )}
                            {pac.p_type === "C" && (
                                <div className="mi_text">클래스 선택</div>
                            )}
                        {pac.p_type === "P" && (
                            <div className="right_maApre_bottom" id="present_div">
                            <div className="present">
                                {pac.p_project.p_present.map(present =>(
                                    <Link to={`/buy1/${pac.p_addr}`}>
                                        <div className="pre_div">
                                            <h2>{present.pr_price} +</h2>
                                            <p className="price_detail">{present.pr_name}</p>
                                            <ul id="use_decoration">
                                                {present.pr_gusung.map(g => (
                                                    <li>{g}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            </div>
                        )}
                        {pac.p_type === "C" && (
                            <div className="right_maApre_bottom" id="present_div">
                            <div className="present">
                                {pac.p_class.c_lesson.map(lesson =>(
                                    <Link to={`/buy1/${pac.p_addr}`}>
                                        <div className="pre_div">
                                            <p className="lesson_name">{lesson.le_name}</p>
                                            <p className="lesson_intro">{lesson.le_intro}</p>
                                            <p className="lesson_intro">{new Date(lesson.le_date).getFullYear() + '년' + (new Date(lesson.le_date).getMonth() + 1) + '월' + new Date(lesson.le_date).getDate() + '일 ' + lesson.le_startTime + '~' + lesson.le_endTime}</p>
                                            <h2 className="textRignt">{lesson.le_price}원<span className="small_text">(1人)</span></h2>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        )}
                        
                    </div>
                    <div className="empty_zone"> </div>
                </div>
            </div>
            <Recomend />
        </div>
        );
        }else{
            return(
                <p></p>
            )
        }
    }else{
        return(
            <>
                <LoadingDiv>Loading...</LoadingDiv>
            </>
        )
    }
};

export default ProjectDetailForm;
