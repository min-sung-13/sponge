import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPac, unloadPac } from '../../modules/pac';
import { listRes } from '../../modules/res';
import { listLas, addLas } from '../../modules/las';
import BuyPage3Form from '../../components/buy/BuyPage3Form';

const BuyPage1Container = ({ match, history }) => {
    const { p_addr } =  match.params;
    console.log('container p_addr : ' + p_addr)
    const dispatch = useDispatch();
    const { pac, error, loading, user, las } = useSelector(({ pac, loading, user, las }) => ({
        pac: pac.pac,
        error: pac.error,
        user: user.user,
        las : las.las,
        loading: loading['pac/READ_PAC']
    }));

    const SubmitSign = (ls_type, ls_myid, ls_productcode,ls_signtext) => {
        dispatch(addLas({ls_type, ls_myid, ls_productcode,ls_signtext}))
        history.push('/');
    }

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listRes());
        dispatch(listLas());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);
    console.log(pac);
    return <BuyPage3Form pac={pac} loading={loading} error={error} history={history} user={user} las={las} SubmitSign={SubmitSign}/>;
};

export default withRouter(BuyPage1Container);