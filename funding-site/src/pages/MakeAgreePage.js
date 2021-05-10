import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MakeAgreeForm from '../components/make/MakeAgreeForm';

const MakeAgreePage = () => {
    return(
        <>
            <Header/>
            <MakeAgreeForm />
            <Footer/>
        </>
    );
};

export default MakeAgreePage;