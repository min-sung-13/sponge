import React, { useState } from 'react';
import MakeTopDivForm from '../components/make/MakeTopDivForm';
import MakeProjectContainer from '../containers/make/MakeProjectContainer';
import Header from '../components/common/Header';

const MakePage = () => {

    const [title, setTitle] = useState('준비중');

    const onSubmit = (title) => {
        setTitle(title);
    }


    return(
        <>
            <Header/>
            <MakeTopDivForm title={title}/>
            <MakeProjectContainer onSubmit={onSubmit}/>
        </>
    );
};

export default MakePage;