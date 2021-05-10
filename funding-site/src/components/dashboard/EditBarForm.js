import React, { useEffect, useState, Component, useRef } from 'react';
import '../../scss/mingcss.css';
import {IoMdEye, IoMdRadioButtonOff, IoIosCheckmarkCircle, IoIosPaperPlane} from 'react-icons/io';
import EditFirstPage from './EditFirstPage';
import EditSecondPage from './EditSecondPage';
import EditThirdPage from './EditThirdPage';
import EditFourPage from './EditFourPage';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const EditBarForm = ({onSubmit, user, makeProjectSubmit, history, location, pac}) =>{

    let pac2={};
    let p_maker2 = {};
    let tag = '';
    if(pac) {
        pac2 = pac;
        p_maker2 = pac2.p_maker;
        for(var i = 0; i < pac2.p_tag.length; i++) {
            tag += pac2.p_tag[i] + ",";
        }
        console.log(pac2.p_maker);
        console.log(pac2);
    }
    
    var u_id;
    if(!user){
        history.push('/login');
    }else{
        u_id = user.u_id;
    }

    const [h, setH] = useState(0);
    const [page1check, setPage1check] = useState(true);
    const [page2check, setPage2check] = useState(true);
    const [page3check, setPage3check] = useState(true);
    const [page4check, setPage4check] = useState(true);


    //page1
    const [p_title, setP_title] = useState(pac2.p_title);
    const [p_img, setP_img] = useState(pac2.p_img);
    const [p_explain, setP_explain] = useState(pac2.p_explain);
    const [p_cate, setP_cate] = useState(pac2.p_cate);
    const [p_addr, setP_addr] = useState(pac2.p_addr);
    const [p_tag2, setP_tag2] = useState(tag);

    const [m_profile, setM_profile] = useState(p_maker2.m_profile);
    const [m_name, setM_name] = useState(p_maker2.m_name);
    const [m_intro, setM_intro] = useState(p_maker2.m_intro);

    //page2
    const [p_target, setP_target] = useState('');
    const [p_startDate, setP_startDate] = useState('');
    const [p_lastDate, setP_lastDate] = useState('');
    const [p_present, setP_present] = useState([]);
    const [p_refund, setP_refun] = useState('');

    //page3
    const [p_video, setP_video] = useState('');
    const [p_story, setP_story] = useState('');

    //page4
    const [m_email, setM_email] = useState('');
    const [m_certification, setM_certification] = useState(false);
    const [m_account, setM_account] = useState({'bankname': '', 'banknum':''});

    const p_hit = 0;
    const p_state = "D";
    const p_type = "P";
    const p_pick = "N";

    const menubarInput1 = useRef();
    const menubarInput2 = useRef();
    const menubarInput3 = useRef();
    const menubarInput4 = useRef();

    const onClick = e => {
        menubarInput1.current.className = 'menu_l';
        menubarInput2.current.className = 'menu_l';
        menubarInput3.current.className = 'menu_l';
        menubarInput4.current.className = 'menu_l';
        e.target.className = 'menu_l select_menu';
        setH(e.target.getAttribute('data'));
    }

    const settingPage1 = ({title, img, explain, cate, addr, tag, mimg, mname, mintro}) => {
        console.log(tag);
        console.log(img + "imggggggggggggggggg")
        setP_title(title); setP_img(img); setP_explain(explain); setP_cate(cate); setP_addr(addr); setP_tag2(tag); setM_profile(mimg); setM_name(mname); setM_intro(mintro);
        if(title !== '' && img !== '' && explain !== '' && cate !== '' && addr !== '' && tag !== '' && mimg !== '' && mname !== '' && mintro !== ''){
            setPage1check(true);
        }
    };
    const settingPage2 = ({target, start, end, present, hwanbul}) => {
        setP_target(target); setP_startDate(start); setP_lastDate(end); setP_present(present); setP_refun(hwanbul);
        if(target !== '' && start !== '' && end !== '' && present !== '' && hwanbul){
            setPage2check(true);
        }
    };
    const settingPage3 = ({video, story}) => {
        console.log("story : " + story);
        setP_video(video); setP_story(story);
        if(story !== '' ){
            setPage3check(true);
        }
    };
    const settingPage4 = ({email, injung, bank}) => {
        console.log("back : " + JSON.stringify(bank));
        setM_email(email); setM_certification(injung);setM_account(bank);
        if(email !== '' && injung !== false && bank.bankname !== '' && bank.banknun !== '' ){
            setPage4check(true);
        }
    };

    const makeProject = e => {

        var p_tag = p_tag2.split(',');
        makeProjectSubmit({p_title, p_img});
    }

    useEffect(()=> {
    },[h, page1check, page2check, page3check, page4check, p_title, p_img, p_explain, p_cate, p_addr, p_tag2, m_profile, m_name, m_intro, p_target, p_startDate, p_lastDate, p_present, p_refund, m_email, m_account, m_certification, menubarInput1, menubarInput2, menubarInput3, menubarInput4])

    const obj = {
        0:<EditFirstPage onSubmit={onSubmit} settingPage1={settingPage1} data={{p_title, p_img, p_explain, p_cate, p_addr, p_tag2, m_profile, m_name, m_intro}} />,
        1:<EditSecondPage settingPage2={settingPage2} data={{p_target, p_startDate, p_lastDate, p_present, p_refund}}/>,
        2:<EditThirdPage settingPage3={settingPage3} data={{p_video, p_story}}/>,
        3:<EditFourPage settingPage4={settingPage4} data={{m_email, m_certification, m_account}}/>
    }

    
    return(
    <div className="make_project">
        <div className="make_menu">
            <div className="inner_box77">
                <span className="change_span">
                    <div className="menu_r gumto" onClick={makeProject}><IoIosPaperPlane size="19" className="checked_t"/>검토 요청하기</div>
                    <div className="menu_r miri">
                    <IoMdEye size="19" className="checked_t"/>미리보기</div>
                </span>
                <span className="mini_bar">
                    <button className="menu_l select_menu" data="0" ref={menubarInput1} onClick={onClick}>
                        <span className="make_span_to_block">{page1check === true ? 
                            <IoIosCheckmarkCircle size="24" color="#157efb" className="checked"/>
                        :
                            <IoMdRadioButtonOff size="24" className="checked" color="#dcddde" />
                        }</span>프로젝트 개요
                    </button>
                    <button className="menu_l" data="1" ref={menubarInput2} onClick={onClick}>
                        <span className="make_span_to_block" >{page2check === true ? 
                            <IoIosCheckmarkCircle size="24" color="#157efb" className="checked"/>
                        :
                            <IoMdRadioButtonOff size="24" className="checked" color="#dcddde" />
                        }</span>펀딩 및 선물 구성
                    </button>
                    <button className="menu_l" data="2" ref={menubarInput3} onClick={onClick}>
                        <span className="make_span_to_block">{page3check === true ? 
                            <IoIosCheckmarkCircle size="24" color="#157efb" className="checked"/>
                        :
                            <IoMdRadioButtonOff size="24" className="checked" color="#dcddde" />
                        }</span>스토리텔링
                    </button>
                    <button className="menu_l" data="3" ref={menubarInput4} onClick={onClick}>
                        <span className="make_span_to_block">{page4check === true ? 
                            <IoIosCheckmarkCircle size="24" color="#157efb" className="checked"/>
                        :
                            <IoMdRadioButtonOff size="24" className="checked" color="#dcddde" />
                        }</span>계좌 설정
                    </button>
                </span>
            </div>
        </div>
        <div className="content_zone">
            <div className="inner_box77">
                {obj[h]}
            </div>
        </div>
    </div>
    );
    // }else {
    //     return(
    //         <div>실패</div>
    //     )
    // }
};

export default withRouter(EditBarForm);