import client from './client';
import qs from 'qs';


export const writeNotice = ({n_title, n_content, n_cateCode, n_like, n_image}) => 
client.post('/api/notice/', {n_title, n_content, n_cateCode, n_like, n_image});


export const replaceNotice = ({n_title, n_content, n_cateCode, n_like, n_image, notice}) => 
    client.patch(`/api/notice/${notice._id}`, {n_title, n_content, n_cateCode, n_like, n_image});    

export const readNotice = id => client.get(`/api/notice/${id}`);

console.log("api List 접속");
export const listNotice = ({n_title, n_date, n_cateCode}) => {
    const queryString = qs.stringify({
        n_title,
        n_date,
        n_cateCode
    });
    return client.get(`/api/notice${queryString}`);
}

export const removeNotice =({notice}) => client.delete(`/api/notice/del/${notice._id}`, {notice});





