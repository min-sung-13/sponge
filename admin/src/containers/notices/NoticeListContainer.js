import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import NoticeList from '../../components/common/noticeList/NoticeList';
import  {listNotices} from '../../modules/notices';


const NoticeListContainer =({location}) => {
    const dispatch = useDispatch();
    const {notices, error, loading} = useSelector(({notices, loading}) => ({
            notices: notices.notices,
            error: notices.error,
            loading: loading['notice/LIST_NOTICES'],
        })
    );

    useEffect(() => {
        const {n_title, n_cateCode, n_date, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(listNotices({n_title, n_cateCode, n_date, page}))
    },[dispatch, location.search]);

    return (
        <NoticeList
            loading={loading}
            error={error}
            notices={notices}   
        />
    )
    
}

export default withRouter(NoticeListContainer);