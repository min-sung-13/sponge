import client from './client';
import qs from 'qs';


export const listNotices = ({n_title, n_date, n_cateCode, n_image}) => {
    const queryString = qs.stringify({
        n_title,
        n_date,
        n_cateCode,
        n_image
    });
    return client.get(`/api/notice${queryString}`);
}

export const readingNotice = _id => client.get(`/api/notice/detail/${_id}`);

export const nextNotice = ({n_title, n_date, n_cateCode, n_image}) => {
    const queryString = qs.stringify({
        n_title,
        n_date,
        n_cateCode,
        n_image
    });
    return client.get(`/api/notice/detail${queryString}`);
}
