import React from 'react';;
const ClassListinfo=({les}) => {

const {le_price, le_name, le_day,le_minstudent, le_maxstudent, le_intro} = les;
   
    return(
        
            <ul>
            <li>레슨 이름: <span>{le_name}</span></li>
            <li>레슨 가격: <span>{le_price}</span>원</li>
            <li>레슨 가능 요일: <span>{le_day+","}</span></li>
            <li>레슨 최소 인원: <span>{le_minstudent}</span>명</li>
            <li>레슨 최대 인원: <sapn>{le_maxstudent}</sapn>명</li>
            <li>레슨 설명: <br/><span>{le_intro}</span></li>
          </ul>

)

    }    
    

export default ClassListinfo;