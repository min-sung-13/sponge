import React from 'react';
import '../../scss/style_class1.css';
import { withRouter, Link } from 'react-router-dom';
import { RiHandHeartLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import pointimg from '../../image/point2.png';

const Myhome = ({user, res, onClick, pac}) => {

    var myp = 0;
    var myc = 0;

    if(res && pac){
        for(var i = 0; i < res.length; i++){
            if(user.u_id === res[i].r_userid){
                for(var j = 0; j < pac.length; j++){
                    if(res[i].r_code === pac[j]._id){
                        if(pac[j].p_type === "P"){
                            myp++;
                        }else if(pac[j].p_type === "C"){
                            myc++;
                        }
                    }
                }
            }
        }
    }

    return(
        <>
            <div>
                <div class="s_menu">나의 프로젝트</div>
                <div class="m_p_intro" >
                    <div class="display_inline_block_my">
                        <div class="m_p_text">펀딩하기</div>
                        <div class="m_p_count" onClick={onClick} data="7"><span className="m_p_count2" onClick={onClick} data="7"><span onClick={onClick} data="7">{myp}</span>회</span></div>
                    </div>
                    <div class="display_inline_block_my">
                        <div class="m_p_text">클래스듣기</div>
                        <div class="m_p_count" onClick={onClick} data="7"><span className="m_p_count2" onClick={onClick} data="7"><span onClick={onClick} data="7">{myc}</span>회</span></div>
                    </div>
                </div>
            </div>
            <div class="margin_up">
                <div class="s_menu">나의활동</div>
                <div class="myP_me"onClick={onClick} data="2"><IoMdHeartEmpty size="23" class="iconimg" />좋아한<AiOutlineRight class="bt_img" onClick={onClick}/></div>
                <div class="myP_me"onClick={onClick} data="3"><RiHandHeartLine size="23" class="iconimg" />지지서명한<AiOutlineRight class="bt_img" /></div>
                <div class="myP_me noup" onClick={onClick} data="1"><img alt="이미지" src={pointimg} class="iconimg_p"/>포인트<AiOutlineRight class="bt_img" /></div>
            </div>
            <div class="margin_up">
                <div class="s_menu"> </div>
                <Link to="/notice"><div class="myP_me">공지사항<AiOutlineRight class="bt_img"/></div></Link>
                <div class="myP_me" onClick={onClick} data="6">설정<AiOutlineRight class="bt_img" /></div>
            </div>   
        </>
    );
};

export default withRouter(Myhome);
