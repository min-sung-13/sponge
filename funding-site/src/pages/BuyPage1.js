import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import BuyBarContainer from '../containers/buy/BuyBarContainer';
import BuyPage1Container from '../containers/buy/BuyPage1Container';

const BuyPage = () => {
    return(
        <>
            <Header/>
            <BuyBarContainer/>
            <BuyPage1Container/>
            <Footer/>
        </>

    );
};

export default BuyPage;