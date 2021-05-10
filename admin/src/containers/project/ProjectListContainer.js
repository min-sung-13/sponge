import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { listProjects } from '../../modules/projects';
import ProjectList from '../../components/common/projectList/ProjectList';

const ProjectListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {projects, error, loading} = 
    useSelector(
        ({projects, loading}) => ({
            projects: projects.projects,
            error: projects.error,
            loading: loading['project/LIST_PROJECTS']
        })
    )


useEffect(() => {
    const {p_code, p_maker, p_title, p_explain, p_state, page} = qs.parse(location.search, {
        ignoreQueryPrefix:true
    });
    dispatch(listProjects({p_code, p_maker, p_title, p_explain, p_state, page}))
  },[dispatch, location.search]); 
    
  return(
    <ProjectList
        loading={loading}
        error={error}
        projects={projects}
    />
  )
}

export default withRouter(ProjectListContainer)