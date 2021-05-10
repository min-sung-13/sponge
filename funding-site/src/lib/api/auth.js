import client from './client';

export const login = ({ u_id, u_password }) => client.post('/api/auth/login', { u_id, u_password });
export const kakao_login = ({ u_id }) => client.post('/api/auth/kakao_login', { u_id });
export const naver_login = ({ u_id }) => client.post('/api/auth/naver_login', { u_id });

export const register = ({ u_username, u_id, u_password }) => client.post('/api/auth/register', { u_username, u_id, u_password});
export const kakao_reg = ({ u_username, u_id, u_profile }) => client.post('/api/auth/kakao_reg', { u_username, u_id, u_profile });
export const naver_reg = ({ u_username, u_id, u_profile }) => client.post('/api/auth/naver_reg', { u_username, u_id, u_profile });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');

export const update = ({ u_password, u_profile }) => client.patch('/api/auth/updateInfo', { u_password, u_profile });