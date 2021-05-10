import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import RegisterForm from '../containers/auth/RegisterForm';

const JoinPage = () => {
    return(
        <>
            <Header/>
            <RegisterForm />
            <Footer/>
        </>

    );
};

export default JoinPage;