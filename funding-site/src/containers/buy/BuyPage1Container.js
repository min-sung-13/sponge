import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPac, unloadPac } from '../../modules/pac';
import { listRes } from '../../modules/res';
import BuyPage1Form from '../../components/buy/BuyPage1Form';

const BuyPage1Container = ({ match, history }) => {
    const { p_addr } =  match.params;
    console.log('container p_addr : ' + p_addr)
    const dispatch = useDispatch();
    const { pac, error, loading } = useSelector(({ pac, loading }) => ({
        pac: pac.pac,
        error: pac.error,
        loading: loading['pac/READ_PAC']
    }));

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listRes());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);
    console.log(pac);
    return <BuyPage1Form pac={pac} loading={loading} error={error} history={history} p_addr={p_addr}/>;
};

export default withRouter(BuyPage1Container);