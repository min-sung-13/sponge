import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import BuyBarContainer from '../containers/buy/BuyBarContainer';
import BuyPage2Container from '../containers/buy/BuyPage2Container';

const BuyPage = () => {
    return(
        <>
            <Header/>
            <BuyBarContainer/>
            <BuyPage2Container/>
            <Footer/>
        </>

    );
};

export default BuyPage;