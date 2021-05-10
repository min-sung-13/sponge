import client from "./client";

export const listRes = () => client.get('/api/reservation');
export const addRes = ({ r_code, r_userid, r_price, r_detail, r_phone, r_addr }) => client.post('/api/reservation', { r_code, r_userid, r_price, r_detail, r_phone, r_addr })
export const deleteRes = ({_id}) => client.get(`/api/reservation/delete/${_id}`);

