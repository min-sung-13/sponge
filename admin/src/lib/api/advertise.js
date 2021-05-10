import client from './client';
import qs from 'qs';


export const allowAdvertise = (
    {
        advertise,
        a_allow
    }) => client.patch(`/api/advertise/result/${advertise._id}`, {a_allow});



    export const allowNoAdvertise = (
        {
            advertise,
            a_allow2
        }) =>client.patch(`/api/advertise/result2/${advertise._id}`, {a_allow2});


export const listAdvertise = ({a_userid, a_title, a_content, a_color, a_img, a_startdate, a_enddate,  a_price}) => {
    const queryString = qs.stringify({
        a_userid, a_title, a_content, a_color,a_img, a_startdate, a_enddate, a_price
    });
    return client.get(`/api/advertise${queryString}`);
}