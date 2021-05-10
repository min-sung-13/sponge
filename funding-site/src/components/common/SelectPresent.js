import React, { useEffect, useState } from 'react';
import '../../scss/mingcss.css';
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im';
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline} from 'react-icons/io';
import {BiMinusCircle, BiPlusCircle} from 'react-icons/bi';

const SelectPresent = ({poc, sumPrice, minusPrice, setbuyArray, setbuyArray2, pac}) => {

    const [selectp, setSelectp] = useState(false);
    const [buynum, setBuynum] =useState(0);
    const changeCheck = e => {
        console.log(selectp)
        setSelectp(!selectp);
    }

    const downNum = e => {
        if(buynum > 1){
            setBuynum(buynum-1);
        }
        if(pac.p_type === "P"){
            minusPrice(poc.pr_price);
        }else{
            minusPrice(poc.le_price);
        }
    }

    const upNum = e => {
        setBuynum(buynum+1);
        if(pac.p_type === "P"){
            sumPrice(poc.pr_price);
        }else{
            sumPrice(poc.le_price);
        }
    }

    useEffect(()=> {
        console.log(selectp)
        if(selectp === false){
            setBuynum(0);
        }
        if(pac.p_type === "P"){
            setbuyArray (poc.pr_name, poc.pr_gusung, buynum, poc.pr_price)
        }else{
            setbuyArray2(poc.le_name, poc.le_intro, poc.le_price, poc.le_date, poc.le_startTime, poc.le_endTime, buynum)
        }
    },[selectp, buynum])

    return (
        <>
            {pac.p_type === "P" && ( <span>
            {selectp === false ?
                <div class="reward_box">
                    <div class="checkcheck" onClick={changeCheck}>
                        <ImCheckboxUnchecked />
                    </div>
                    <div class="check_info">
                        <p class="sum">{poc.pr_price}원 펀딩합니다.</p>
                        <p class="number">{poc.pr_name}</p>
                        <p class="text"><ul id="funding_ul">{poc.pr_gusung.map(m => <li>{m}</li>)}</ul></p> 
                    </div>
                </div>
                    :
                    <div class="reward_box22">
                        <div class="checkcheck" onClick={changeCheck} style={{'color':'#3a6ff2'}}>
                            <ImCheckboxChecked/>
                        </div>
                    <div class="check_info">
                        <p class="sum">{poc.pr_price}원 펀딩합니다.</p>
                        <p class="number">{poc.pr_name}</p>
                        <p class="text"><ul id="funding_ul">{poc.pr_gusung.map(m => <li>{m}</li>)}</ul></p> 
                    </div>
                    <div class="choice_price">
                   <BiMinusCircle size="22" style={{'color':'#3a6ff2', 'verticalAlign': 'middle', 'marginRight' :'5px'}} onClick={downNum}/><input type="number" value={buynum}/><BiPlusCircle size="22" style={{'color':'#3a6ff2', 'verticalAlign': 'middle', 'marginLeft' :'5px'}} onClick={upNum}/>
                    </div> 
                    </div>
                }
                </span>)
            }
            {pac.p_type === "C" && ( <span>
            {selectp === false ?
                <div class="reward_box">
                    <div class="checkcheck2" onClick={changeCheck}>
                        <ImCheckboxUnchecked />
                    </div>
                    <div class="check_info">
                        <p class="sum">{poc.le_price}원<span className="small_text">(1人)</span></p>
                        <p className="lesson_name">{poc.le_name}</p>
                        <p className="lesson_intro">{poc.le_intro}</p>
                        <p className="lesson_intro">{new Date(poc.le_date).getFullYear() + '년' + (new Date(poc.le_date).getMonth() + 1) + '월' + new Date(poc.le_date).getDate() + '일 ' + poc.le_startTime + '~' + poc.le_endTime}</p>
                    </div>
                     </div>
                    :
                    <div class="reward_box22">
                        <div class="checkcheck2" onClick={changeCheck} style={{'color':'#3a6ff2'}}>
                            <ImCheckboxChecked/>
                        </div>
                    <div class="check_info">
                        <p class="sum">{poc.le_price}원<span className="small_text">(1人)</span></p>
                        <p className="lesson_name">{poc.le_name}</p>
                        <p className="lesson_intro">{poc.le_intro}</p>
                        <p className="lesson_intro">{new Date(poc.le_date).getFullYear() + '년' + (new Date(poc.le_date).getMonth() + 1) + '월' + new Date(poc.le_date).getDate() + '일 ' + poc.le_startTime + '~' + poc.le_endTime}</p>
                    </div>
                    <div class="choice_price">
                   <BiMinusCircle size="22" style={{'color':'#3a6ff2', 'verticalAlign': 'middle', 'marginRight' :'5px'}} onClick={downNum}/><input type="number" value={buynum}/><span className="small_text">人</span><BiPlusCircle size="22" style={{'color':'#3a6ff2', 'verticalAlign': 'middle', 'marginLeft' :'5px'}} onClick={upNum}/>
                    </div> 
                    </div>
                }
                </span>)
            }
        </>
    )
};

export default SelectPresent;