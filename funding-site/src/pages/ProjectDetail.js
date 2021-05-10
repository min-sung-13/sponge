import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PacDetailContainer from '../containers/pac/PacDetailContainer';

const ProjectDetail = () => {
    return(
        <>
            <Header/>
            <PacDetailContainer/>
            <Footer/>
        </>
    );
};

export default ProjectDetail;
