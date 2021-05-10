import client from "./client";

export const listAdv = to_day => client.get(`/api/advertise/${to_day}`);

export const makeadvm = ({ a_userid, a_title, a_title2, a_content, a_color, a_startdate, a_enddate, a_allow, a_price, a_img }) => client.post('/api/advertise', { a_userid, a_title, a_title2, a_content, a_color, a_startdate, a_enddate, a_allow, a_price, a_img });

