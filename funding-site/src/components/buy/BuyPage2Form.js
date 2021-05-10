import React, { useEffect, useState } from 'react';
import '../../scss/filterbar.css';
import {useLocation} from "react-router";
import DaumPostcode from "react-daum-postcode";

const BuyPage2Form = ({ user, history, point, pac, saveResButton, addPoint}) => {
    const location = useLocation();
    const state = location.state;   
    // console.log('state : ' + JSON.stringify(state));
    console.log('state : ' + JSON.stringify(state))

    const huwonPrice = state.huwon;

    const [usePoint , setUsePoint] = useState(0);
    const [show, setShow] = useState(false);
    const [checkcheck, setCheckcheck] = useState(false);
    const [yochung, setYochung] = useState('');
    const [bankname, setBankname] = useState('');
    const [b1, setB1] = useState('');
    const [b2, setB2] = useState('');
    const [b3, setB3] = useState('');
    const [b4, setB4] = useState('');
    const [nname, setNname] = useState('');
    const [phone, setPhone] = useState('');
    const [sangse, setSangse] = useState('');
    const [bs, setbs] = useState(1);

    var totalPresentprice = 0;
    var detailText = '';
    

    if(state.type === "P"){
        for(var i = 0; i < state.present.length;i++){
            totalPresentprice += (state.present[i].pr_price * state.present[i].pr_buynum);
            if(state.present[i].pr_buynum > 0){
                if(i === state.present.length){
                    detailText += state.present[i].pr_name + 'x' + state.present[i].pr_buynum;
                }else{
                    detailText += state.present[i].pr_name + 'x' + state.present[i].pr_buynum + '/';
        
                }
            }
        }
    }else{
        for(var i = 0; i < state.lesson.length;i++){
            totalPresentprice += (state.lesson[i].le_price * state.lesson[i].le_buynum);
            if(state.lesson[i].le_buynum > 0){
                if(i === state.lesson.length){
                    detailText += state.lesson[i].le_name + '(' + state.lesson[i].le_buynum + ")";
                }else{
                    detailText += state.lesson[i].le_name + '(' + state.lesson[i].le_buynum + '명),';
        
                }
            }
        }
    }
    var myusePoint = 0;
    var mygetPoint = 0;
    var ppoint;
    var icanusePoint = 0;
    if(point){
        ppoint = point.filter(a => a.u_id === user.u_id);
        for(var k = 0; k < ppoint.length; k++){
            myusePoint += ppoint[k].u_usePoint;
            mygetPoint += ppoint[k].u_getPoint;
        }
        icanusePoint = mygetPoint - myusePoint;
    }
    const changeB1 = e => { setB1(e.target.value)};
    const changeB2 = e => { setB2(e.target.value)};
    const changeB3 = e => { setB3(e.target.value)};
    const changeB4 = e => { setB4(e.target.value)};

    const changeSelect = e =>{
        setBankname(e.target.value)
    }
    const nnamechange = e => { setNname(e.target.value)}
    const yoChange = e =>{setYochung(e.target.value);}
    const checkcheckbox = e =>{setCheckcheck(!checkcheck);}
    const phonechange = e => {setPhone(e.target.value);}
    const showDaumpost = e => {setShow(!show);}
    const changSang = e => { setSangse(e.target.value);}

    const checkMax = e => {
        setUsePoint(e.target.value)
        if(e.target.value > icanusePoint){
            alert('최대 보유포인트까지 사용가능합니다. 다시 입력해주세요');
            setUsePoint(0)
        }
    }
    useEffect(()=>{
        console.log('myusePoint : ' + myusePoint);
        console.log('mygetPoint : ' + mygetPoint);
        console.log('icanusePoint : ' + icanusePoint);
        if(checkcheck === true){
            setUsePoint(icanusePoint);
        }
    }, [totalPresentprice, myusePoint, mygetPoint, ppoint, icanusePoint, usePoint, show, checkcheck,bankname, b1, b2, b3, b4])

    useEffect(()=> {
        if(usePoint <= 0){
            setbs(1);
        }else{
            setbs(0);
        }
    }, [usePoint])

    const onResSubmit = () => {
        // if(phone === '' || nname === '' || ad_addr1 === '' || ad_addr2 === '' || ad_addr3 === ''){
        //     alert('데이터를 모두 입력해주세요.')
        //     return;
        // }
        const data = {
            r_code: pac._id,
            r_userid: user.u_id,
            r_price: totalPresentprice + Number.parseInt(huwonPrice) - usePoint,
            r_detail: detailText,
            r_phone: phone,
            r_addr : {
                ad_name: nname,
                ad_addr1: isZoneCode,
                ad_addr2: isAddress,
                ad_addr3: sangse,
                ad_please: yochung
            }
        }
        if(bs === 1){
            var addp = Math.floor((totalPresentprice + Number.parseInt(huwonPrice) - usePoint) * 0.05);
            var pdata = {
                u_id : user.u_id,
                u_getPoint : addp,
                u_usePoint : 0
            }
            addPoint(pdata);
        }else{
            var ddata = {
                u_id : user.u_id,
                u_getPoint : 0,
                u_usePoint : usePoint
            }
            addPoint(ddata);
        }
        saveResButton(data);
    }

    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
        if (data.bname !== "") {
            extraAddress += data.bname;
        }
        if (data.buildingName !== "") {
            extraAddress +=
            extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        // setIsPostOpen(false);
    };

  const postCodeStyle = {
    display: "block",
    width: "100%",
    height: "fix-content",
    padding: "10px 5px",
    marginTop : "20px",
    border: "1px solid #e4e4e4"
  };

    return(
        <div class="inner_box2">
        <div class="buy_reward_choice"> 
            <ol class="reward_choice_list">    
                <li class="reward_choice"><em class="reward_em_text">리워드<br/>선택</em></li>
                <li class="reward_choice" id="reward_choice_first"><em class="reward_em_text">결제예약</em></li>
                <li class="reward_choice"><em class="reward_em_text">소문내기</em></li>
            </ol>
        </div>
        <form action="post" class="purchaseForm">
            <div class="wpurchase-order">
                <div class="order_list">
                    {state.type === "P" && (
                        <ul>
                        {state.present.map(p => p.pr_buynum !== 0 && (
                            <li>
                                <p class="order_list_title">{p.pr_name}</p>
                                <p class="order_list_text"><ul id="hiulim">{p.pr_gusung.map(t => <li>{t}</li>)}</ul></p>
                                <div class="order_list_info">
                                    <p class="order_list_sum">
                                        <em>수량 : {p.pr_buynum}개</em>
                                        {p.pr_buynum * p.pr_price}원
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    )}
                    {state.type === "C" && (
                        <ul>
                        {state.lesson.map(p => p.le_buynum > 0 && (
                            <li>
                                <p class="order_list_title">{p.le_name}</p>
                                <p class="order_list_text">{p.le_intro}</p>
                                <p class="order_list_text">{new Date(p.le_date).getFullYear() + '년' + (new Date(p.le_date).getMonth() + 1) + '월' + new Date(p.le_date).getDate() + '일 ' + p.le_startTime + '~' + p.le_endTime}</p>
                                <div class="order_list_info">
                                    <p class="order_list_sum">
                                        <em>수량 : {p.le_buynum}개</em>
                                        {p.le_buynum * p.le_price}원
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    )}
                    
                </div>
                <div class="order_list_addinfo">
                    {(state.type === "P" && (
                        <dl>
                        <dt>추가 후원금</dt>
                        <dd>{huwonPrice}원</dd>
                        </dl>
                    ))}
                    
                    <div class="point">
                        <span id="coupon-field" class="disabled"></span>
                        <dl id="nomargin">
                            <dt>
                                포인트 사용
                            </dt>
                            <dd>
                                <label class="wz checkbox">
                                    <input type="checkbox" id="ckptAll" onChange={checkcheckbox}/>
                                    <span>모두 사용 (보유 포인트 
                                        <span id="usablePoint">{mygetPoint - myusePoint}</span>P)
                                    </span>
                                </label>     
                                <input type="number" id="pointInput" class="numOnly pointInput" value={usePoint} onChange={checkMax}/>
                            </dd>
                        </dl>
                        <input type="hidden" id="limitPoint" value="0"/>    
                    </div>
                </div>
                <div class="order_list_suminfo">
                    <dl>
                        <dt>{(state.type === "P" ? '펀딩' :  '결제')}금액</dt>
                        <dd>
                            <span class="fundingPrice">{totalPresentprice}</span>원
                        </dd>
                    </dl>
                    <dl>
                        <dt>포인트 차감금액</dt>
                        <dd class="point_minus">
                            <em id="pointPrice">{usePoint}</em>원
                        </dd>
                    </dl>
                    {(state.type === "P" && (
                        <dl>
                        <dt>추가 후원금</dt>
                        <dd>{huwonPrice}원</dd>
                        </dl>
                    ))}
                    
                    <dl class="total dotted">
                        <dt>최종결제금액</dt>
                        <dd>
                            <em id="totalPriceView">{totalPresentprice + Number.parseInt(huwonPrice) - usePoint}</em>원
                        </dd>
                    </dl>{bs === 1 && (
                        <dl id="nomargin">
                            <dt></dt>
                            <dd>(적립포인트 : {Math.floor((totalPresentprice + Number.parseInt(huwonPrice) - usePoint) * 0.05)}p)</dd>
                        </dl>
                    )}
                </div>
            </div>
            <div class="order_delivery">
                <div class="order_delivery2">
                    <h3>
                        <em>리워드 배송지</em>
                    </h3>
                    <button type="button" class="show_list">최근 배송지 보기</button>
                    <div class="delivery_list">
                        
                    </div>
                    <div class="deliver_new active">
                        <div class="input_area">
                            <p class="title">이름</p>
                            <input type="text" id="newPresenteeName" value={nname} onChange={nnamechange}/>
                            <p class="title">휴대폰 번호</p>
                            <input type="text" id="newContactNumber" maxlength="13" value={phone} onChange={phonechange}/>
                            <em class="error-message" id="errorPhoneNum">휴대폰 번호를 정확히 입력해주세요.</em>
                            <p class="title">주소</p>
                            <button type="button" onClick={showDaumpost}>우편번호 검색</button>
                            {show === true && (
                                <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
                            )}
                            <input type="text" maxlength="96" id="addressnumber" placeholder="우편번호" value={isZoneCode} disabled/>
                            <input type="text" maxlength="96" id="address" placeholder="주소" disabled value={isAddress}/>
                            <input type="text" maxlength="96" id="newAddressDetails" placeholder="상세주소" value={sangse} onChange={changSang}/>
                        </div>
                    </div>
                    <div class="delivery-shippingMemo">
                        <div class="input_area">
                            <p class="title">배송 시 요청사항(선택)</p>
                            <input type="text" id="shippingMemo" maxlength="50" placeholder="ex) 부재시 경비실에 보관해주세요." value={yochung} onChange={yoChange}/>
                            <p class="subtext">해당 요청사항은 배송에 관련된 내용만 적어주세요.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="payment-info-container">
                <div class="reward-simplepay-app" data-type="purchase">
                    <div class="SimplePayPurchase_simplePayPurchase__3IMEe">
                        <h3 class="SimplePayPurchase_title__1pSst">결제 정보</h3>
                        <div className="ff_left_right">
                            <p>은행사</p>
                            <select onChange={changeSelect}>
                                <option>신한</option>
                                <option>하나</option>
                                <option>국민</option>
                                <option>농협</option>
                            </select>
                        </div>
                        <div className="ff_left_right">
                            <p>카드 번호</p>
                            <div><input type="text" value={b1} onChange={changeB1}/>-<input type="text" value={b2} onChange={changeB2}/>-<input type="text" value={b3} onChange={changeB3}/>-<input type="text" value={b4} onChange={changeB4}/></div>
                        </div>
                    </div>    
                </div>
                <div id="wpurchaseReserveNotice" class="wpurchase_notice">
                    <p class="title">결제 예약시 유의사항</p>
                    <ul>
                        <li>
                            결제실행일에 결제자 귀책사유(한도초과, 이용정지 등)로 인하여 결제가 실패할 수 있으니, 결제수단이 유효한지 한번 확인하세요.
                        </li>
                        <li>
                            1차 결제 실패 시 실패일로부터 3 영업일 동안 재 결제를 실행합니다.
                        </li>
                        <li>
                            결제 예약 이후, 결제할 카드를 변경하려면 마이페이지 ☞ 나의 펀딩의 결제정보에서 카드정보를 변경해주세요.
                        </li>
                    </ul>
                </div>    
            </div>    
        </form>
        <div class="btn-wrap">
            <button type="button" id="btn-submit" class="wz primary button" onClick={onResSubmit}>결제 예약하기</button>
        </div>    
    </div> 
    );
};

export default BuyPage2Form;
