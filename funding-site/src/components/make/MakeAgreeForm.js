import React, { useEffect, useState } from 'react';
import '../../scss/mingcss.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const MakeAgreeForm = ({ history }) => {

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    const checkboxClick = e => {if(check1 === false){setCheck1(true);}else{setCheck1(false);}}
    const checkboxClick2 = e => {if(check2 === false){setCheck2(true);}else{setCheck2(false);}}
    const checkboxClick3 = e => {if(check3 === false){setCheck3(true);}else{setCheck3(false);}}
    const checkboxClick4 = e => {if(check4 === false){setCheck4(true);}else{setCheck4(false);}}

    useEffect(()=> {
        console.log("check1 : " + check1);
        console.log("check2 : " + check2);
        console.log("check3 : " + check3);
        console.log("check4 : " + check4);
    }, [check1, check2, check3, check4])

    const goMakeProject = () => {
        if(check1 === true && check2 === true && check3 === true && check4 === true){
            history.push('/make');
        }else{
            alert('모두 체크해주세요')
        }
    }

    return(
        <div id="funding_page">    
        <div class="check_total">
            <div className="check_zone">
                <h2>프로젝트를 올리기 전에 확인해주세요</h2>
                <div className="check_explain explain_1">
                    스펀지은 공개 검토 절차를 통해 창작자님이 작성한 프로젝트가 스펀지의 정책을 준수하는지 확인하고 있습니다.
                    <br/>
                    아래 사항들을 확인한 후 프로젝트를 올려 주세요.
                </div>
                <div className="check_explain explain_2">
                        <a href="https://help.tumblbug.com/hc/ko/articles/360052346633" target="_blank" rel="noopener noreferrer">프로젝트 공개검토 기준
                        </a>
                </div>
                <div className="check_explain">
                    <ul className="check_list_ul">
                        <li onChange={checkboxClick}>
                            <div >
                                <input type="checkbox" checked={check1} />
                                <span>
                                    새로운 아이디어를 실현하기 위한 프로젝트입니다.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div onChange={checkboxClick2}>
                                <input type="checkbox" checked={check2} />
                                <span>
                                    이미 시판된 제품, 현금이나 지분 등 수익 제공, 선물 없는 단순 기부, 성인 인증이 필요한 콘텐츠 등 기준에 맞지 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;않는 선물을 제공하지 않습니다.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div onChange={checkboxClick3}>
                                <input type="checkbox" checked={check3} />
                                <span>
                                    창작자의 신분증 혹은 사업자등록증, 국내 은행 계좌, 연락 가능한 본인 휴대폰 번호가 있습니다.
                                </span>
                            </div>
                        </li>
                        <li>
                            <div  onChange={checkboxClick4}>
                                <input type="checkbox" checked={check4}/>
                                <span>
                                    창작자 대표자는 19세 이상 성인입니다.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="check_explain55" id="setHeight">
                    <button className="check_next_btn" id="blue_color" onClick={goMakeProject}>프로젝트 오픈하기</button>
                    <Link to="/make" type="submit" className="check_next_btn" id="yellow_color">클래스 오픈하기</Link>
                </div>
            </div>
        </div> 
    </div>
    );
};

export default withRouter(MakeAgreeForm);
