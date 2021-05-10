import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPac, unloadPac } from '../modules/pac';
import { listRes } from '../modules/res';
import EditTopDivForm from '../components/dashboard/EditTopDivForm';
import EditProjectContainer from '../containers/dashboard/EditProjectContainer';
import Header from '../components/common/Header';

const EditPage = ({ match }) => {
    const { p_addr } =  match.params;
    console.log(p_addr);
    console.log('detail p_addr' + p_addr)
    const dispatch = useDispatch();
    const { pac, error, loading, res } = useSelector(({ pac, loading, res }) => ({
        pac: pac.pac,
        error: pac.error,
        res: res.res,
        loading: loading['pac/READ_PAC']
    }));

    let pac2 = {};
    if(pac) {
        pac2 = pac;
    }

    const [title, setTitle] = useState(pac2.p_title);

    const onSubmit = (title) => {
        setTitle(title);
    }

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listRes());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);
    console.log({pac});

    return(
        <>
            <Header/>
            <EditTopDivForm title={title} pac={pac} />
            <EditProjectContainer onSubmit={onSubmit}/>
        </>
    );
};

export default EditPage;