import React from 'react';
import '../../scss/mingcss.css';
import finder from '../../image/finder.png';

const SearchForm = () => {
    return(
        <div className="inner_box">
            <div className="search_ming">
                {/* <div className="search_div">
                    <input type="text" placeholder="어떤 프로젝트를 찾고 계신가요?"/>
                    <img src="./image/finder.png" alt="돋보기"/>
                </div> */}
                <img src={finder} alt="돋보기"/>
            </div>
        </div>
    );
};

export default SearchForm;
