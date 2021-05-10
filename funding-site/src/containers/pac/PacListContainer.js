import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListForm from '../../components/list/ListForm';
import { listPacs } from '../../modules/pacs';

const PacListContainer = ({ location, fms, fmc, fmo, ftag, history, sort}) => {
    const dispatch = useDispatch();
    const { pacs, error, loading,user } = useSelector(
        ({ pacs, loading,user}) => ({
            user : user.user,
            pacs: pacs.pacs,
            error: pacs.error,
            loading: loading['pacs/LIST_PACS']
        })
    );

    useEffect(() => {
        dispatch(listPacs());
    }, [dispatch, location.search]);

    return (
        <ListForm
            loading={loading}
            error={error}
            pacs={pacs}
            fms={fms} fmc={fmc} fmo={fmo} ftag={ftag}
            history={history}
            user={user}
            sort={sort}
        />
    );
};

export default withRouter(PacListContainer);