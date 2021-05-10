import React from 'react';
import '../../scss/style_fundding.css';
import NoticeListContainer from '../../containers/notice/NoticeListContainer';
import SearchNoticeForm from '../notice/SearchNoticeForm';

const NoticeListForm = () => {
    return(
        <>
        <div id="funding_page">  
            <div class="secondHeader">
                <div class="inner_box">
                    <div class="secondHeader_noti">
                        <h2 class="notiH2">공지사항</h2>
                    </div>
                </div>
            </div>
            <NoticeListContainer />
        </div>
        </>
    );
};

export default NoticeListForm;
