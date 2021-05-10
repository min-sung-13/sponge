import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NoticeContainer from '../containers/notice/NoticeContainer';
import NextNoticeListContainer from '../containers/notice/NextNoticeListContainer';

const NoticeDetailPage = () => {
    return(
        <>
            <Header/>
            <NoticeContainer/>
            <NextNoticeListContainer/>
            <Footer/>
        </>
    );
};

export default NoticeDetailPage;
