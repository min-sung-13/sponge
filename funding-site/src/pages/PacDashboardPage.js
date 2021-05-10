import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PacDashboardContainer from '../containers/dashboard/PacDashboardContainer';

const PacDashboardPage = () => {
    return(
        <>
            <Header />
            <PacDashboardContainer />
            <Footer />
        </>
    )

}

export default PacDashboardPage;