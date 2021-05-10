import React, { useEffect } from 'react';
import '../../scss/mingcss.css';


const Dal = ({ res, pac, color}) => {

    var dalsung;
    var hap = 0;

    if(res){
        dalsung = res;
        // console.log('dalsung : ' + JSON.stringify(dalsung))
        dalsung = dalsung.filter(r => r.r_code == pac._id);
        for(var i = 0; i < dalsung.length; i++){
            hap += dalsung[i].r_price;
        }
    }

    

    if(res){
        return (
        <div className={`p_dal ${color}`}>{Math.floor((hap/pac.p_project.p_target) * 100)}% 달성</div>
        )
    }else{
        return(
            <div></div>
        )
    }
    

   
};

export default Dal;