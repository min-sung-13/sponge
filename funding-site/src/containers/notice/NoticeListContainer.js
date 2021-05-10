import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ListForm from '../../components/notice/ListForm';
import  {listNotices} from '../../modules/notice/notices';


const NoticeListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {notices, error, loading} = useSelector(
        ({notices, loading}) => ({
            notices: notices.notices,
            error: notices.error,
            loading: loading['notices/LIST_NOTICES'],
        })
    );

    useEffect(() => {
        const {n_title, n_cateCode, n_date, n_image, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listNotices({n_title, n_cateCode, n_date, n_image, page}))
    },[dispatch, location.search]);

    return (
        <ListForm loading={loading} error={error} notices={notices} />
    )
    
}

export default withRouter(NoticeListContainer);