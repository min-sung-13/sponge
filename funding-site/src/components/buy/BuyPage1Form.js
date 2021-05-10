import React, { useEffect, useState } from 'react';
import '../../scss/filterbar.css';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import SelectPresent from '../common/SelectPresent'
import { withRouter } from 'react-router-dom';


const BuyPage1Form = ({ pac, history, p_addr}) => {
    console.log('pac : ' + pac)

    const [preAllPrice, setPreAllPrice] = useState(0);
    const [huwon, setHuwon] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [array, setArray] = useState([]);

    const setbuyArray = (prname, prgusung, prnum, prprice) => {
        const data = {
            pr_name : prname,
            pr_gusung :  prgusung,
            pr_buynum : prnum,
            pr_price : prprice
        }
        var i = array;
        i = i.filter(k => k.pr_name === prname);
        console.log('개수는 : ' + JSON.stringify(i))
        if( i.length > 0 ){
            console.log('ㅑ>0 실행됨')
            setArray(array.map(pr => pr.pr_name === prname ? {...pr,'pr_buynum' : prnum } : pr));
        }else{
            console.log('else실행됨')
            setArray(array.concat(data));
        }
    }
    const setbuyArray2 = (lename, leintro, leprice, ledate, lestartTime, leendTime, buynum) => {
        const data = {
            le_name : lename, 
            le_intro : leintro, 
            le_price : leprice,
            le_date : ledate,
            le_startTime : lestartTime,
            le_endTime : leendTime, 
            le_buynum : buynum
        }
        var i = array;
        i = i.filter(k => k.le_name === lename);
        console.log('개수는 : ' + i.length)
        if( i.length > 0 ){
            console.log('ㅑ>0 실행됨')
            setArray(array.map(pr => pr.le_name === lename ? {...pr,'le_buynum' : buynum } : pr));
        }else{
            console.log('else실행됨')
            setArray(array.concat(data));
        }
    }

    const minusPrice = (price) =>{
        setPreAllPrice(preAllPrice - price);
    }
    const sumPrice = (price) => {
        setPreAllPrice(preAllPrice + price);
    }

    const huwonChange = e =>{
        setHuwon(e.target.value);
    }

    const goBuy2 = e => {
        if(pac.p_type === "P"){
            history.push({
                pathname: `/buy2/${p_addr}`,
                state: {
                    present : array,
                    huwon : huwon,
                    type: "P"
                }
            })
        }else{
            history.push({
                pathname: `/buy2/${p_addr}`,
                state: {
                    lesson : array,
                    huwon : 0,
                    type: "C"
                }
            })
        }
    }

    useEffect(() => {
        console.log(preAllPrice);
        setTotalPrice(preAllPrice + Number.parseInt(huwon));
        console.log('buyArray : ' + JSON.stringify(array));
    }, [preAllPrice, huwon, array])

    if(pac){
    return(
        <div id="funding_page">  
        <div class="inner_box2">
                <div class="buy_reward_choice"> 
                    <ol class="reward_choice_list">    
                        <li class="reward_choice" id="reward_choice_first"><span class="reward_em_text">{pac.p_type === "P" ? '선물' : '수업'}선택</span></li>
                        <li class="reward_choice" id="reward_choice_second"><span class="reward_em_text">결제예약</span></li>
                        <li class="reward_choice" id="reward_choice_thrid"><span class="reward_em_text">소문내기</span></li>
                    </ol>
                </div>
                <div class="reward_goods">
                    {pac.p_type === "P" && (
                        <span>
                        <div class="reward_goods_choice">
                        <div class="reward_info">
                            <h3>선물 선택</h3>
                            <p>펀딩해주시는 금액에 따라 감사의 의미로 선물를 제공해 드립니다.</p>
                            <span><a href="https://www.naver.com/"><IoIosInformationCircleOutline size="24" style={{'verticalAlign' : 'bottom'}}/> 펀딩하기는 쇼핑하기가 아닙니다! 자세히 알아보세요.</a></span>
                        </div>
                        <div class="reward_list">
                            <ul>{pac.p_project.p_present.map(k => 
                                    <li>
                                        <SelectPresent poc={k} minusPrice={minusPrice} sumPrice={sumPrice} setbuyArray={setbuyArray} pac={pac}/>
                                    </li>
                                )}
                            </ul>
                        </div>
                        </div>
                        <div class="buy_donation">
                        <h3 class="h_title">후원금 더하기(선택)</h3>
                        <div class="donation-wrap">
                            <p class="sub_text">후원금을 더하여 펀딩할 수 있습니다. 추가 후원금을 입력하시겠습니까?</p>
                            <div class="donation_price_text">
                                <input type="number" class="extra_charge" onChange={huwonChange}  value={huwon}/><span>원을 추가로 후원합니다.</span>
                            </div>
                        </div>
                        </div>
                        </span>
                    )}
                    {pac.p_type === "C" && (
                        <div class="reward_goods_choice">
                        <div class="reward_info">
                            <h3>클래스 선택</h3>
                            <p>원하는 클래스를 자유롭게 선택해주세요.</p>
                        </div>
                        <div class="reward_list">
                            <ul>{pac.p_class.c_lesson.map(k => 
                                    <li>
                                        <SelectPresent poc={k} minusPrice={minusPrice} sumPrice={sumPrice} setbuyArray2={setbuyArray2} pac={pac}/>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    )}    
                </div>
                {pac.p_type === "P" && (
                    <div class="result_buy">
                    <p class="confirm">"<span>{pac.p_title}</span>"에 <span className="purple_color">{totalPrice}</span>원을 펀딩합니다.
                    </p>
                    <button class="btn_buy"  onClick={goBuy2}>다음 단계로</button>
                </div>
                )}
                {pac.p_type === "C" && (
                    <div class="result_buy">
                        <p class="confirm">"<span>{pac.p_title}</span>"에 <span className="purple_color">{totalPrice}</span>원을 결제합니다.
                        </p>
                    <button class="btn_buy"  onClick={goBuy2}>다음 단계로</button>
                </div>
                )}
                
            </div>    
        </div>  
    );
    }else{
        return(
            <div>뭐임</div>
        );
    }
};

export default withRouter(BuyPage1Form);
