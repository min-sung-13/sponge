import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPac, unloadPac } from '../../modules/pac';
import { listRes } from '../../modules/res';
import BuyerListForm from '../../components/dashboard/BuyerListForm';

const BuyerListContainer = ({ match, history }) => {
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

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listRes());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);
    console.log({pac});
    return (
        <BuyerListForm pac={pac} loading={loading} error={error} res={res} history={history} />
    );
};

export default withRouter(BuyerListContainer);