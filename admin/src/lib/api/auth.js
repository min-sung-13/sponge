import client from './client';
import qs from 'qs';

export const login = ({ username, password }) =>
    client.post('/api/auth/login', { username, password });

export const register = ({ username, password }) => 
    client.post('/api/auth/register', { username, password });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');

export const listAuth = ({u_id, u_username, u_profile}) => {
    const queryString = qs.stringify({
        u_id,
        u_username,
        u_profile
    });
    return client.get(`/api/auth${queryString}`);
}