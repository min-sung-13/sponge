import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return(
        <>
            <Header/>
            <LoginForm />
            <Footer/>
        </>

    );
};

export default LoginPage;