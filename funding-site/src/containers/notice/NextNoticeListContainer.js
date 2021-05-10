import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import NextNoticeForm from '../../components/notice/NextNoticeForm';
import  {nextNotice} from '../../modules/notice/nextNotice';


const NextNoticeListContainer =({location}) => {
    const dispatch = useDispatch();
    const {notices, error, loading} = useSelector(
        ({notices, loading}) => ({
            notices: notices.notices,
            error: notices.error,
            loading: loading['notice/LIST_NOTICES'],
          
        })
    );

    useEffect(() => {
        const {n_title, n_cateCode, n_date, n_image, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(nextNotice({n_title, n_cateCode, n_date, n_image, page}))
    },[dispatch, location.search]);



       
        
        return (
            <NextNoticeForm
                loading={loading}
                error={error}
                notices={notices}
                
            />
            )
    
}

export default withRouter(NextNoticeListContainer);