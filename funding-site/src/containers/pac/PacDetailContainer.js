import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPac, unloadPac } from '../../modules/pac';
import { listRes } from '../../modules/res';
import ProjectDetailForm from '../../components/detail/ProjectDetailForm';
import { listLas } from '../../modules/las';

const PacDetailContainer = ({ match, history }) => {
    const { p_addr } =  match.params;
    console.log('detail p_addr' + p_addr)
    const dispatch = useDispatch();
    const { pac, error, loading, res, las } = useSelector(({ pac, loading, res, las }) => ({
        pac: pac.pac,
        error: pac.error,
        res: res.res,
        las: las.las,
        loading: loading['pac/READ_PAC']
    }));

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listRes());
        dispatch(listLas());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);
    console.log(pac);
    return <ProjectDetailForm pac={pac} loading={loading} error={error} res={res} las={las} history={history}/>;
};

export default withRouter(PacDetailContainer);