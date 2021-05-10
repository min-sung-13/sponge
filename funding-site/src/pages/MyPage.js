import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import EditInfoForm from '../containers/auth/EditInfoForm';

const MyPage = () => {
    return(
        <>
            <Header/>
            <EditInfoForm />
            <Footer/>
        </>
    );
};

export default MyPage;
