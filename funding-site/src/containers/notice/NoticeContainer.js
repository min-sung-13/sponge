import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {readingNotice, unloadNotice} from '../../modules/notice/notice';
import NoticeForm from '../../components/notice/NoticeForm';


const NoticeContainer =({ match })=>{
   
    const { _id } = match.params;
    console.log("****************************" + _id);
    const dispatch = useDispatch();
    const { notice, error, loading} = useSelector(({notice, loading}) => ({
        notice: notice.notice,
        error: notice.error,
        loading: loading['notice/READ_NOTICE']
    }));

    useEffect(()=> {
        dispatch(readingNotice(_id));
        return () => {
            dispatch(unloadNotice());
        };
    }, [dispatch]);

 
    return <NoticeForm notice={notice} loading={loading} error={error}/>;
};

export default withRouter(NoticeContainer);