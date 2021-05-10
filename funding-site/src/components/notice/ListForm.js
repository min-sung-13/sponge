import React, { useEffect } from 'react';
import '../../scss/style_fundding.css';
import { Link } from 'react-router-dom';
import img from '../../image/test3.jpg';
import Moment from 'react-moment';


const ListFormDetail =({notice}) => {

    const {n_title, n_cateCode, n_date, n_content, n_image } = notice;
    var _id = notice._id;
    console.log("::::::::::::::::::::::::::::::::" + _id)

    useEffect(()=> {
        
    },[_id])

    return(
    <Link to={`/detail/${_id}`} class="notiA">
        <div class="info">
            <div style={n_cateCode === "공지" ? {'color' : 'black'} : null 
            || n_cateCode === "보도자료" ? {'color' : '#00ccff'} : null
            || n_cateCode === "이벤트 종료" ? {'color' : '#ff66ff'} : null 
            || n_cateCode === "이벤트 진행중" ? {'color' : '#ff6666'} : null }  
            >
                {n_cateCode} 
            </div>
            <h3 class="notiTitle">{n_title}</h3>
            <span class="comp">SPONGE</span>
            <span class="notiDate"><Moment format="YYYY/MM/DD">{n_date}</Moment></span>
        </div>
        <div class="notiA_img">
            <img src={n_image} alt="" class="notiA_img_list"/>
        </div>
    </Link>
    )
}

const ListForm = ({notices, error, loading}) => {
    if(error) {
        return <p>에러발생</p>
    }
    return(
        <>
            <div class="noticeMiddle inner_box">
                {!loading && notices && (
                <ul>
                    {notices.map(notice => (
                    <li>
                        <ListFormDetail notice={notice} key={notice._id} />
                    </li>
                        ))}
                </ul>
                    )}
            </div>
        </>
    );
};

export default ListForm;
