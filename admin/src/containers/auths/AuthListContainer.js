import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {listAuths} from '../../modules/auths';
import AuthList from '../../components/common/authList/AuthList'


const AuthListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {auths, error, loading } = useSelector(({ auths, loading, user }) => ({
            auths: auths.auths,
            error: auths.error,
            loading: loading['auth/LIST_AUTHS'],
        })
    );
        
    useEffect(() => {
        const {u_id, u_username, u_profile, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listAuths({u_id, u_username, u_profile, page}))
    },[dispatch, location.search]);
        
    return (
        <AuthList
            loading={loading}
            error={error}
            auths={auths}
        />
    )
}
        
export default withRouter(AuthListContainer);