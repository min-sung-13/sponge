import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {listPacsBySuc } from '../../modules/m_pacs/sucpacs';
import ViewSpongeForm from '../../components/main/ViewSpongeForm';
import qs from 'qs';

const PacMainSucListContainer = ({ location, title, color,history}) => {
    const to_day = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    const dispatch = useDispatch();
    const { spacs, error, loading,user } = useSelector(
        ({ spacs, loading,user}) => ({
            user: user.user,
            spacs: spacs.spacs,
            error: spacs.error,
            loading: loading['pacs/LIST_SPACS']
        })
    );

    useEffect(() => {
        const { p_title, p_cate, p_addr, p_state, p_type, p_img} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listPacsBySuc({p_title, p_cate, p_addr, p_state, p_type, p_img, to_day}));
        
    }, [dispatch, location.search]);

    // console.log("spacs : " + spacs);
    
    return (
        <ViewSpongeForm
            loading={loading}
            error={error}
            pacs={spacs}
            title={title}
            color={color}
            user={user}
            history={history}
        />
    );
};

export default withRouter(PacMainSucListContainer);