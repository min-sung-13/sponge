import client from './client';
import qs from 'qs';

export const checkProject = ({project, p_state}) => client.patch(`/api/pac/check/${project._id}`, {p_state});

    export const checkNoProject = (

        
        {
        project,
        p_state2}) =>client.patch(`/api/pac/check2/${project._id}`, {p_state2});



export const listProject = ({p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate, p_project}) => {
    const queryString = qs.stringify({
        p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate, p_project
    });
    return client.get(`/api/pac${queryString}`);
}

export const checkPick = (
    {
    project,
    p_pick}) => client.patch(`/api/pac/pick/${project._id}`, {p_pick});

    export const checkNoPick = (
        {
        project,
        p_pick2}) =>client.patch(`/api/pac/pick2/${project._id}`, {p_pick2});