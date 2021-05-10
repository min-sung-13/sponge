import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPacsByHit} from '../../modules/m_pacs/hitpacs';
import ViewSpongeForm from '../../components/main/ViewSpongeForm';
import qs from 'qs';

const PacMainHitListContainer = ({ location, title, color, history}) => {
    const dispatch = useDispatch();
    const { hpacs, error, loading,user } = useSelector(
        ({ hpacs, loading,user}) => ({
            user: user.user,
            hpacs: hpacs.hpacs,
            error: hpacs.error,
            loading: loading['pacs/LIST_HPACS']
        })
    );

    // console.log("hpacs : " + hpacs);

    useEffect(() => {
        const { p_title, p_cate, p_addr, p_state, p_type, p_img } = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listPacsByHit({p_title, p_cate, p_addr, p_state, p_type, p_img}));
    }, [dispatch, location.search]);

    
    return (
        <ViewSpongeForm
            loading={loading}
            error={error}
            pacs={hpacs}
            title={title}
            color={color}
            user={user}
            history={history}
        />
    );
};

export default withRouter(PacMainHitListContainer);