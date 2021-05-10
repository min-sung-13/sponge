import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPac, unloadPac } from '../../modules/pac';
import { listRes } from '../../modules/res';
import BuyBar from '../../components/common/BuyBar';

const BuyBarContainer = ({ match, history }) => {
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
    return <BuyBar pac={pac}/>;
};

export default withRouter(BuyBarContainer);