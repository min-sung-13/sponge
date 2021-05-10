import client from './client';
import qs from 'qs';


export const checkLesson = (
    {
        lesson,
        p_state
    }) =>client.patch(`/api/pac/check/${lesson._id}`, {p_state});

    export const checkNoLesson = (
        {
            lesson,
            p_state2
        }) =>client.patch(`/api/pac/check2/${lesson._id}`, {p_state2});


export const listLesson = ({p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate,p_target, p_class}) => {
    const queryString = qs.stringify({
        p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate,p_target, p_class
    });
    return client.get(`/api/pac${queryString}`);
}

export const checkPick = (
    {
    lesson,
    p_pick}) =>client.patch(`/api/pac/pick/${lesson._id}`, {p_pick});

export const checkNoPick = (

    
    {
        lesson,
        p_pick2}) =>client.patch(`/api/pac/pick2/${lesson._id}`, {p_pick2});