import React, { useState, useEffect } from 'react';
import '../../scss/mingcss.css';
import left3Img from '../../image/left3.png';
import right3Img from '../../image/right3.png';

const AdvertisementForm = ({adv}) => {

    
    
    const [cnt, setCnt] = useState(1);
    const [maxCnt, setMaxCnt ] = useState(Object.keys(adv).length);
    const [aimg, setAimg] = useState(null);
    const [title, setTitle] = useState(null);
    const [title2, setTitle2] = useState(null);
    const [content, setContent] = useState(null);
    const [color, setColor] = useState(null);

    const setData = () => {
        console.log('진입');
        console.log(adv[cnt-1]);
        setAimg(adv[cnt-1].a_img);
        setTitle(adv[cnt-1].a_title);
        setTitle2(adv[cnt-1].a_title2);
        setContent(adv[cnt-1].a_content);
        setColor("#" + adv[cnt-1].a_color);
    }
    
    useEffect(() => {
        setData();
    }, [cnt]);
    
    const before = e => {
        if(cnt <= 1){
            setCnt(maxCnt);
        }else{
            setCnt(cnt - 1);
        }
    };
    
    const after = e => {
        if(cnt >= maxCnt){
            setCnt(1);
        }else{
            setCnt(cnt + 1);
        }
    };

    // setInterval(()=>after(), 5000);
    setTimeout(()=>after(), 5000)
    


    if(adv){
        return(
            <div className="inner_box jjajung">
                <div className="adver_div"> 
                    <span className="overflowflex">
                        <img src={aimg} alt="dd" className="adver_img" />
                    </span>
                </div>
                <div className="adver_zone" style={{backgroundColor: color}}>
                    <div className="adver_title1">{title}</div>
                    <div className="adver_title2">{title2}</div>
                    <p className="adver_sub_title">{content}</p>
                </div>
                <p className="adver_btn">
                    <img src={left3Img} alt="left" onClick={before} />
                    <img src={right3Img} alt="right" onClick={after} />
                    <span>{cnt} / {maxCnt}</span>
                </p>
                <div className="clearBoth"></div>
            </div>
        );
    }else{
        return(<div>gg</div>);
    }
};

export default AdvertisementForm;
