import React, { useState, useEffect } from 'react';
import '../../scss/style_class1.css';
import { FaRegHandPointRight} from "react-icons/fa";
import {BsPencilSquare } from "react-icons/bs";
import {AiOutlinePlusCircle, AiOutlineCheck} from "react-icons/ai";
import {GoCheck} from 'react-icons/go';
import {GrCircleQuestion} from 'react-icons/gr';

const SecondPage = ({ settingPage2, data}) => {

    const {p_target, p_startDate, p_lastDate, p_present, p_refund} = data;

    var firstRefun;
    if(p_refund == ''){
        firstRefun = `모든 프로젝트 공통\n- 프로젝트 마감일 후에는 즉시 제작 및 실행에 착수하는 프로젝트 특성상 단순 변심에 의한 후원금 환불이 불가능합니다.\n- 예상 전달일로부터 [    ]일 이상 선물 전달이 이뤄지지 않을 경우, 환불을 원하시는 분들께는 [ 수수료를 제한 / 수수료를 포함한 ] 후원금을 환불해 드립니다.\n(플랫폼 수수료: 모금액의 5%, 부가세 별도 , 결제 수수료: 결제 성공액의 3%, 부가세 별도 )\n- 선물 전달을 위한 배송지 및 서베이 답변은 [   마감일 이후 날짜를 입력해주세요.(ex 20XX. XX. XX)   ]에 일괄 취합할 예정입니다.\n- 이후 배송지 변경이나 서베이 답변 변경을 원하실 때에는 '창작자에게 문의하기'로 개별 문의하셔야 합니다.\n배송이 필요한 선물\n- 파손 또는 불량품 수령 시 [   ]일 이내로 교환이 가능합니다.\n- 교환 및 AS 문의는 '창작자에게 문의하기'로 신청해 주세요.\n- 파손이나 불량품 교환시 발생하는 비용은 창작자가 부담합니다. 선물 확인을 위한 포장 훼손 외에 아이템의 가치가 훼손된 경우에는 교환 및 환불이 불가합니다.\n[ - 파손이나 불량의 예시 또는 기준이 있을 경우 추가해 주세요. ]\n- 후원자가 배송지를 잘못 기재하거나 창작자에게 사전 고지 없이 배송지를 수정하여 배송사고가 발생할 경우 \n창작자는 [  최대   번까지 재발송 해 드립니다. 배송비 부담은 (  창작자 / 후원자  )에게 있습니다   /   책임을 지지 않습니다  ].\n공연/행사 등 현장수령으로 이루어지는 선물\n- 행사 참가권은 타인에게 양도가 [  가능  /  불가능  ]합니다.\n- 현장에서 수령해야 하는 선물을 수령하지 못하신 경우 환불은 [  가능   /  불가능  ]하며, 선물 배송을 위한 추가 배송비를 별도 요청드릴 수 있습니다.\n 디지털 콘텐츠로 이뤄진 선물\n- 전달된 파일에 심각한 결함이나 저작권상 문제가 있을 경우, 수수료 [  포함  /  제외  ]하여 환불 가능합니다.\n- 전달된 파일은 타인에게 양도가 [  가능  /  불가능  ]합니다.`
    }else{
        firstRefun = p_refund;
    }
    const to_day = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate() + 1);
    const [target, setTarget] = useState(p_target);
    const [start, setStart] = useState(p_startDate);
    const [end, setEnd] = useState(p_lastDate);
    const [present, setPresent] = useState(p_present);
    const [hwanbul, setHwanbul] = useState(firstRefun);
    const [lastMaxDateString, setLastMaxDateString] = useState('');
    const [jung, setJung] = useState('');

    const [op, setOp] = useState({'pr_price':'', 'pr_name' : '', 'pr_gusung':''})

    const save = e =>{ settingPage2({target, start, end, present, hwanbul}); }

    const targetChange = e => {setTarget(e.target.value);}
    const startChange = e => { 
        setStart(e.target.value);
    }
    const endChange = e => {
        setEnd(e.target.value);
    }
    const hwanbulChange = e => {setHwanbul(e.target.value);}

    var gusungText;
    const pregu = e => {
        gusungText = e.target.value;
    }
    const setgusung = () => {
        var a = gusungText.split('%');
        setOp({...op, 'pr_gusung' : a});
    }
    const savepst = e => {
        setPresent([...present, op]);
        setOp({'pr_name' : '', 'pr_gusung' : '', 'pr_price' : ''})
    }

    const prename = e => {
        setOp({...op, 'pr_name' : e.target.value});
    }
    const preprice = e => {
        setOp({...op, 'pr_price' : e.target.value});
    }

    useEffect(()=> {
        console.log('update2!');
        console.log(present)
        if(start != ''){
            console.log("starttype : " + typeof(start));
            var dateArray = start.split('-');
            var lastMaxDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
            lastMaxDate.setDate(lastMaxDate.getDate() + 60);
            if((lastMaxDate.getMonth() + 1) < 10){
                setLastMaxDateString(lastMaxDate.getFullYear() + '-0' + (lastMaxDate.getMonth() + 1) + '-' + lastMaxDate.getDate());
            }else{
                setLastMaxDateString(lastMaxDate.getFullYear() + '-' + (lastMaxDate.getMonth() + 1) + '-' + lastMaxDate.getDate());
            }
            if(end != ''){
                dateArray = end.split('-');
                lastMaxDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
                lastMaxDate.setDate(lastMaxDate.getDate() + 1);
                if((lastMaxDate.getMonth() + 1) < 10){
                    setJung(lastMaxDate.getFullYear() + '-0' + (lastMaxDate.getMonth() + 1) + '-' + lastMaxDate.getDate());
                }else{
                    setJung(lastMaxDate.getFullYear() + '-' + (lastMaxDate.getMonth() + 1) + '-' + lastMaxDate.getDate());
                }
            }
        }
    },[target, start, end, present, hwanbul, lastMaxDateString, present, op])

    return(
        <div className="second_zone">
            <div className="big_title">펀딩 목표 설정</div>
            <div className="input_area99">
                <div   className="click_div">
                    <div className="input_title">목표 금액</div>
                    {target == '' ? 
                            <div>
                            < FaRegHandPointRight style={{marginRight: "3px"}}/>
                            목표 금액을 입력해주세요
                            </div>
                        : 
                        <div className="saveText">
                            {target}
                        </div>
                    }
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>{target == '' ? '입력' : '수정'}하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">목표 금액</div>
                    <div>이번 프로젝트를 통해 모으고자 하는 펀딩 목표 금액이 얼마인가요?<br/>
                        마감일 자정까지 목표 금액을 100% 이상 달성하셔야만 모인 후원금이 결제 됩니다.<br/>
                        막판에 후원을 취소하는 후원자들도 있는 점을 감안해 10% 이상 초과 달성을 목표로 하시는게 안전합니다.<br/>
                        (목표 금액은 제작비, 선물 배송비, 창작자의 인건비, 예비 비용 등을 고려하시기 바랍니다.)</div>
                        <input type="number" placeholder="목표 금액을 입력해주세요"  className="content_div99_inputNumber" onChange={targetChange} value={target}/><span>원</span>
                        <div className="susu_div">
                            <div className="text_bold"><GrCircleQuestion size="20"style={{marginRight: "5px", verticalAlign: "top"}}/>수수료를 제외하면 얼마를 받을 수 있나요?</div>
                            <div className="maringbottom22">위 금액을 모으는 데 성공하실 경우, <span className="text_bold">대략 {target - (target * 0.033 + target * 0.055)} 원 정도</span>를 받게 됩니다. 총 모금액에서 대략적으로 아래와 같은 금액이 공제됩니다.</div>
                            <div className="susu_div_left">
                                <table>
                                    <tbody>
                                    <tr className="text_bold">
                                        <td>항목</td>
                                        <td>금액</td>
                                    </tr>
                                    <tr>
                                        <td>결제대행 수수료(3% + VAT)</td>
                                        <td>{target * 0.033}원</td>
                                    </tr>
                                    <tr>
                                        <td>플랫폼 수수료(5% + VAT)</td>
                                        <td>{target * 0.055}원</td>
                                    </tr>
                                    <tr className="text_bold">
                                        <td>공제액 합계</td>
                                        <td>{target * 0.033 + target * 0.055}원</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="susu_div_right"><div>1. 예상 공제액으로, 실제와는 약간의 차이가 있을 수 있습니다.</div><div>2. 목표 금액을 초과하더라도 수수료는 동일한 비율로 발생하며, 모든 수수료는 비용으로 처리하실 수 있도록 세금계산서를 발행해드립니다.</div></div>
                            <div className="clearBoth"></div>
                        </div>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
            <div className="big_title">펀딩 기간 설정</div>
            <div className="input_area99">
                <div   className="click_div">
                    <div className="input_title">프로젝트 공개 일시</div>
                    {start == '' ? 
                            <div>
                            < FaRegHandPointRight style={{marginRight: "3px"}}/>
                            프로젝트 공개 일시를 입력해주세요
                        </div>
                        : 
                        <div className="saveText">
                            {start}
                        </div>
                    }
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>{start == '' ? '입력' : '수정'}하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 공개 일시</div>
                    <div><span className="text_bold">심사 승인 후</span>, 설정하신 일시에 <span className="text_bold">프로젝트가 자동으로 공개되니</span> 신중하게 정해주세요. 설정하신 공개일시와 관계없이 프로젝트를 직접 공개하실 수도 있습니다.</div>
                    <input type="date" value={start}
                        min={to_day} className="content_div99_inputDate" onChange={startChange}/><span className="text_bold">에 펀딩을 시작합니다.</span>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div">
                    <div className="input_title">프로젝트 마감일</div>
                    {end == '' ? 
                            <div>
                            < FaRegHandPointRight style={{marginRight: "3px"}}/>
                            프로젝트 마감일을 입력해주세요
                            </div>
                        : 
                        <div className="saveText">
                            {start}
                        </div>
                    }
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>{end == '' ? '입력' : '수정'}하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 마감일</div>
                <div className="susu_div">프로젝트는 시작일로 부터 최대 60일 동안 진행하실 수 있고 마감일 자정에 종료됩니다.</div>
                    <input type="date" value={end}
                        min={start} max={lastMaxDateString} className="content_div99_inputDate" onChange={endChange}/><span className="text_bold">에 펀딩을 종료합니다.</span>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
            <div className="big_title">프로젝트 주요 일정</div>
            <div className="project_schedule">
                <ul>
                    <li>프로젝트 공개일 : <span>{start}</span></li>
                    <li>프로젝트 마감일 : <span>{end}</span></li>
                    <li>정산일 : <span>{jung}</span></li>
                </ul>
            </div>
            <div className="big_title">선물 구성</div>
            {present.map(p => 
                <div className="present97">
                    <div>선물이름 : {p.pr_name}</div>
                    <div>선물가격 : {p.pr_price}</div>
                    <div>구성 : </div>
                    <ul>
                        {p.pr_gusung.map(k => <li>{k}</li>)}
                    </ul>
                </div>
            )}
            <div className="present99">
                <div>선물추가하기</div>
                <div>선물 이름 : <input type="text" placeholder="선물이름" id="pppccc" onChange={prename} value={op.pr_name}/></div>
                <div>선물 가격 : <input type="number" placeholder="선물가격" onChange={preprice} value={op.pr_price}/></div>
                <div>선물구성 : <input type="text" placeholder="선물구성을 입력해주세요" onChange={pregu} value={gusungText}/><span onClick={setgusung}><AiOutlineCheck/></span></div>
                <div>선물구성을 입력하실때에는 %를 기준으로 줄바꿈 됩니다.</div>
                <button  className="content_div99_button" onClick={savepst}><AiOutlinePlusCircle size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>추가하기</button>
                <div className="clearBoth"></div>
            </div>
            <div className="big_title">펀딩 안내</div>
            <div className="input_area99">
                <div   className="click_div">
                        <div className="input_title">환불 및 교환 정책</div>
                    <div>
                        < FaRegHandPointRight style={{marginRight: "3px"}}/>
                        환불 및 교환 정책을 올려주세요
                    </div>
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>입력하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">환불 및 교환 정책</div>
                    <div>펀딩 마감 후의 환불 및 교환 요청은 창작자가 약속하는 아래 정책에 따릅니다. 이는 후원자의 불만 또는 분쟁 발생시 중요한 기준이 되니, 신중히 작성해 주세요.<br/>• '모든 프로젝트 공통' 내용은 필수로 적어주세요.<br/>
                    • '배송 필요 선물' '현장수령 선물' '디지털 콘텐츠 선물' 내용들은 이번 프로젝트에 해당되는 사항만 골라 작성해 주세요.<br/>
                    • 후원자의 단순 변심, 제품의 파손 및 불량, 창작자의 예기치 못한 선물 실행 지연 등 다양한 상황을 고려하여 내용을 작성해 주세요.</div>
                    <textarea value={hwanbul} onChange={hwanbulChange} className="content_div99_textarea2"/>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                
            </div>
        </div>
    );
};

export default SecondPage;
