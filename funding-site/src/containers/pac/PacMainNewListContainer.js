import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPacsByNew} from '../../modules/m_pacs/newpacs';
import ViewSpongeForm from '../../components/main/ViewSpongeForm';
import qs from 'qs';

const PacMainNewListContainer = ({ location, title, color,history}) => {
    const dispatch = useDispatch();
    const { npacs, error, loading,user } = useSelector(
        ({ npacs, loading,user}) => ({
            user: user.user,
            npacs: npacs.npacs,
            error: npacs.error,
            loading: loading['pacs/LIST_NPACS']
        })
    );

    useEffect(() => {
        const { p_title, p_cate, p_addr, p_state, p_type, p_img} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listPacsByNew({p_title, p_cate, p_addr, p_state, p_type, p_img}));
    }, [dispatch, location.search]);

    // console.log("npacs : " + npacs);

    return (
        <ViewSpongeForm
            loading={loading}
            error={error}
            pacs={npacs}
            title={title}
            color={color}
            user={user}
            history={history}
        />
    );
};

export default withRouter(PacMainNewListContainer);