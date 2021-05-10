import React from 'react';
import '../../scss/filterbar.css';
import {IoIosArrowBack} from 'react-icons/io';


const BuyBar = ({pac}) => {
    if(pac){
        return(
            <div class="buy_item">
                <div class="buy_title">
                    <div className="gobackStory">
                            <IoIosArrowBack size="24" color="white"/>
                            <span className="remove_text">스토리로 돌아가기</span>
                    </div>
                    <div className="inner_box48">
                        <div className="buy_item_title_name">
                            <h2>{pac.p_title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div>망</div>
        )
    }
    
};

export default BuyBar;
