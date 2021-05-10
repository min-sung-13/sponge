import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AdvertisementContainer from '../containers/adv/AdvertisementContainer';
import GoMakePageForm from '../components/main/GoMakePageForm';
import SearchForm from '../components/main/SearchForm';
import PacMainJuListContainer from '../containers/pac/PacMainJuListContainer';
import PacMainNewListContainer from '../containers/pac/PacMainNewListContainer';
import PacMainSucListContainer from '../containers/pac/PacMainSucListContainer';
import PacMainHitListContainer from '../containers/pac/PacMainHitListContainer';

const MainPage = () => {
    
    return(
        <>
            <Header/>
            <AdvertisementContainer />
            <PacMainJuListContainer title="notable" color="text_color_g1"/>
            <PacMainHitListContainer title="hot" color="text_color_g2" />
            <PacMainSucListContainer title="success" color="text_color_g3"/>
            <PacMainNewListContainer title="new" color="text_color_g4"/>
            <GoMakePageForm/>
            <Footer/>
        </>
    );
};

export default MainPage;