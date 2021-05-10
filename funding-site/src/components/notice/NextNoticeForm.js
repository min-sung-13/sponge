
import React from 'react';
import '../../scss/style_fundding.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const NextNoticeFormItem =({notice}) => {
    
    console.log("error : " + JSON.stringify(notice));

    const {n_title, n_cateCode, n_date} = notice;


   

    return(
            <li>
                <a href={`/detail/${notice._id}`}>
                    <p class="title">
                        <em class="category">{n_cateCode}</em>
                        {n_title}
                    </p>
                    <p class="info">
                        <span class="date">
                            스펀지
                            <Moment  format="YYYY/MM/DD">{n_date}</Moment>
                        </span>
                    </p>
                </a>
            </li>
    )

}





const NextNoticeForm = ({notices, error, loading}) => {
    if(error) {
        return <p>에러발생</p>
    }


    return(
        <>
        <div id="newContainer">
    	<div id="wBoardWrap">
        <div class="wboard-detail-bottom">
                <div class="wboard-comment">
                    <p class="comment-num"><em>공지</em> 말머리의 다른 게시글</p>
                    {!loading && notices && (
                    <div class="wboard-list">
                        <ul>
                            {notices.slice(0, 2).map(notice =>  (
                            <NextNoticeFormItem notice={notice} key = {notice._id} />
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
                <div class="wboard-detail-btn-wrap">
                    <Link to="/notice" class="wz button">목록으로 돌아가기</Link>
                </div>
   		    </div>
        </div>
        </div>
        </>
    );
};

export default NextNoticeForm;
