import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPacsByJu } from '../../modules/m_pacs/jupacs';
import ViewSpongeForm from '../../components/main/ViewSpongeForm';
import qs from 'qs';

const PacMainJuListContainer = ({ location, title, color ,history}) => {
    // console.log(history);
    const dispatch = useDispatch();
    const { jpacs, error, loading , user } = useSelector(
        ({ jpacs, loading, user}) => ({
            user: user.user,
            jpacs: jpacs.jpacs,
            error: jpacs.error,
            loading: loading['pacs/LIST_JPACS']
        })
    );

    useEffect(() => {
        const { p_title, p_cate, p_addr, p_state, p_type, p_img, _id} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(
            listPacsByJu({p_title, p_cate, p_addr, p_state, p_type, p_img, _id})
        );
    }, [dispatch, location.search]);


    return (
        <ViewSpongeForm
            loading={loading}
            error={error}
            pacs={jpacs}
            title={title}
            color={color}
            user={user}
            history={history}
        />
    );
};

export default withRouter(PacMainJuListContainer);