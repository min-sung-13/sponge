import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NoticeListForm from '../components/notice/NoticeListForm';

const NoticePage = () => {
    return(
        <>
            <Header/>
            <NoticeListForm/>
            <Footer/>
        </>
    );
};

export default NoticePage;
