import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { listLessons } from '../../modules/lessons';
import ClassList from '../../components/common/classList/ClassList';

const ClassListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {lessons, error, loading} = 
    useSelector(
        ({lessons, loading}) => ({
            lessons: lessons.lessons,
            error: lessons.error,
            loading: loading['lesson/LIST_LESSONS']
        })
    )


useEffect(() => {
    const {p_code, p_maker, p_title, p_explain, page} = qs.parse(location.search, {
        ignoreQueryPrefix:true
    });
    dispatch(listLessons({p_code, p_maker, p_title, p_explain, page}))
    },[dispatch, location.search]); 
    
    return(
        <ClassList
            loading={loading}
            error={error}
            lessons={lessons}
        />
    )
}

export default withRouter(ClassListContainer)