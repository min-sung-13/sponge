import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/mingcss.css';

const GoMakePageForm = () => {
    return(
        <div className="pro_div">
            <div className="text_div">
                SPONGE에서 프로젝트 오픈하기
            </div>
            <Link to="/startMake" className="barogo">바로가기</Link>
        </div>
    );
};

export default GoMakePageForm;
