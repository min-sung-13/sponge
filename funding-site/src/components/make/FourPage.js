import React, { useEffect, useRef, useState } from 'react';
import '../../scss/style_class1.css';
import { FaRegHandPointRight} from "react-icons/fa";
import {BsPencilSquare } from "react-icons/bs";
import {GoCheck} from 'react-icons/go';
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const FourPage = ({settingPage4, data}) => {

    const {m_email, m_certification, m_account} = data;

    const [email, setEmail] = useState(m_email);
    const [injung, setInjung] = useState(m_certification);
    const [bank, setBank] = useState(m_account);


    const save = e =>{ r1.current.className = 'click_div';
    r2.current.className = 'display_none';
    r3.current.className = 'click_div';
    r4.current.className = 'display_none';
    setInjung(true); settingPage4({email,injung, bank}); }

    const changeBank = e => { setBank({...bank, 'bankname' : e.target.value}); }
    const banknumber = e => { setBank({...bank, 'banknum': e.target.value})}
    const changEmail = e =>{ setEmail(e.target.value);}

    useEffect(() => {
        console.log(bank)
    },[email, injung, bank])


    const r1 = useRef();
    const r2 = useRef();
    const r3 = useRef();
    const r4 = useRef();

    const onClick1 = e =>{
        r1.current.className = 'display_none';
        r2.current.className = 'content_div99';
        r3.current.className = 'click_div';
        r4.current.className = 'display_none';
    }
    const onClick2 = e =>{
        r1.current.className = 'click_div';
        r2.current.className = 'display_none';
        r3.current.className = 'display_none';
        r4.current.className = 'content_div99';
    }

    return(
        <Router>
        <div className="forth_zone">
            <div className="big_title">이메일</div>
            <div className="input_area99">
                <div className="click_div" ref={r1} onClick={onClick1}>
                    <div className="input_title">이메일 주소</div>
                    <div>
                        <FaRegHandPointRight style={{marginRight: "3px"}}/>
                        이메일 주소를 입력해주세요
                    </div>
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>입력하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="display_none" ref={r2}>
                    <div className="input_title">이메일 주소</div>
                    <div>창작자님이 연락받으실 수 있는 이메일을 입력해 주세요. 프로젝트 관련 중요 안내사항이 모두 이메일로 전달되므로 평소 자주 확인하는 이메일을 입력하시는 것이 좋습니다.</div>
                    <input type="text" placeholder="이메일 주소를 입력해주세요"  className="content_div99_inputText"onChange={changEmail}/>
                        <button className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
            <div className="big_title">입금 계좌</div>
            <div className="input_area99">
                <div className="click_div" ref={r3} onClick={onClick2}>
                <div className="input_title">계좌 입력</div>
                    <div>
                        <FaRegHandPointRight style={{marginRight: "3px"}}/>
                        계좌 등록를 등록해주세요.
                    </div>
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>입력하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="display_none" ref={r4}>
                    <div className="input_title">계좌 입력</div>
                    <div>계좌를 입력해주세요.</div>
                    <select className="bankSelect" onChange={changeBank}>
                        <option>신한</option>
                        <option>국민</option>
                        <option>하나</option>
                        <option>농협</option>
                    </select>
                    <input type="text" placeholder="계좌를 입력해주세요"  className="content_div99_inputText_width" onChange={banknumber}/>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
        </div>
        </Router>
    );
};

export default withRouter(FourPage);
