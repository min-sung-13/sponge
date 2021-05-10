import React, { useEffect } from 'react';
import '../../scss/mingcss.css';


const Cham = ({ res, pac, color}) => {

    var dalsung;

    if(res){
        dalsung = res;
        // console.log('dalsung : ' + JSON.stringify(dalsung))
        dalsung = dalsung.filter(r => r.r_code == pac._id);
    }
    if(res){
        return (
        <div className={`p_dal ${color}`}>{dalsung.length}명 참여중</div>
        )
    }else{
        return(
            <div></div>
        )
    }
};

export default Cham;