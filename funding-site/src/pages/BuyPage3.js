import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import BuyBarContainer from '../containers/buy/BuyBarContainer';
import BuyPage3Container from '../containers/buy/BuyPage3Container';

const BuyPage = () => {
    return(
        <>
            <Header/>
            <BuyBarContainer/>
            <BuyPage3Container/>
            <Footer/>
        </>
    );
};

export default BuyPage;