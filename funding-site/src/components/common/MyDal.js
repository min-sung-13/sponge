import React from 'react';
import '../../scss/mingcss.css';
import classIcon from '../../image/classIcon.png';
import projectIcon from '../../image/projectIcon.png';
import { Link } from 'react-router-dom';
import clock from '../../image/clock.png';

const Dal = ({ res, pac}) => {

    var dalsung;
    var hap = 0;
    var par = 0;
    var mpar = 0;
    var people = 0;

    if(res){
        dalsung = res;
        // console.log('dalsung : ' + JSON.stringify(dalsung))
        dalsung = dalsung.filter(r => r.r_code == pac._id);
        for(var i = 0; i < dalsung.length; i++){
            hap += dalsung[i].r_price;
            people++;
        }
    }

    

    if(res){

        if(Math.floor((hap/pac.p_project.p_target) * 100) >= 100){
            par = 100;
            mpar = 0;
        }else{
            par = Math.floor((hap/pac.p_project.p_target) * 100);
            mpar = 100 - par;
        }
        return (
            <div className="best_text">
                {pac.p_type === "P" && (
                    <span>
                    <div className="per_line" style={{width: `${par}%`}}></div>
                    <div className="gray_line" style={{width: `${mpar}%`}}></div>
                    </span>
                )}
                <h4>
                {pac.p_type === "C" && (
                    <div className="now_price22">{people}명 참여중</div>
                )}
                {pac.p_type === "P" && (
                    <div className="now_price">{hap}원<span>{Math.floor((hap/pac.p_project.p_target) * 100)}%</span></div>
                )}
                    <div className="now_date"><img src={clock} alt="이미지"/>{
                        Math.floor((new Date(pac.p_lastDate) - new Date()) / (1000*60*60*24)) + 1
                    }일 남음</div>
                    <span className="clearBoth"> </span>
                </h4>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
    

   
};

export default Dal;

