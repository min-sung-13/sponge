import React from 'react';
import '../../scss/mingcss.css';
import {IoMdMegaphone, IoIosInformationCircle, IoIosCheckmarkCircle, IoMdRadioButtonOff} from 'react-icons/io';

const AdvertisementForm = ({title}) => {
    return(
        <div className="make_project">
        <div className="inner_box">
            <div className="center_text_area">
                <div className="project_title">
                    <div>준비중</div>
                    {title === '준비중'? 
                        <div>{title}</div> : <div style={{color: "#3d3d3d"}}>{title}</div>
                    }
                </div>
                <div className="gongea">
                    <a href="https://www.naver.com/"><IoIosInformationCircle size="24" className="checked_t"/>공개검토 요청전에는 어떤 것을 확인해야 할까요?</a>
                </div>
                <div className="explain"><IoMdMegaphone size="20"  className="checked"/>프로젝트를 개설하려면 네 개의 섹션을 완성해야 합니다. 완성된 섹션은
                {/* <img src={check2} alt="빈" className="check_img2"/> */}
                <IoMdRadioButtonOff size="23" className="checked" color="#dcddde"/>
                탭 아이콘에<IoIosCheckmarkCircle size="23" color="#157efb" className="checked"/>파랗게 불이 들어옵니다.</div>
            </div>
        </div>
        </div>
    );
};

export default AdvertisementForm;
