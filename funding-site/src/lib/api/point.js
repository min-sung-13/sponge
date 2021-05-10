import client from "./client";

export const listPoint = () => client.get('/api/point/');
export const addpointm = ({ u_id, u_getPoint, u_usePoint}) => client.post('/api/point/', { u_id, u_getPoint, u_usePoint});

