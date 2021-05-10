import client from "./client";

// export const writePost = ({ title, body, tags }) =>
//   client.post("/api/posts", { title, body, tags });

export const readPac = p_addr => client.get(`/api/pac/getOne/${p_addr}`);
export const readPac2 = _id => client.get(`/api/pac/getOne/${_id}`);

export const addProject = ({p_title, p_explain, p_cate, p_addr, p_tag, p_img, p_maker, p_startDate, p_lastDate, p_refund, p_video, p_story, p_hit, p_state, p_type, p_pick, p_project}) => client.post(`/api/pac/`,{p_title, p_explain, p_cate, p_addr, p_tag, p_img, p_maker, p_startDate, p_lastDate, p_refund, p_video, p_story, p_hit, p_state, p_type, p_pick, p_project});

export const updateProject = ({p_title, p_img, _id}) => client.post(`/api/pac/update/${_id}`, {p_title, p_img});

export const listPacs =  () => client.get(`/api/pac/list`);

export const listPacsByHit = () => client.get(`/api/pac/h/`);
export const listPacsByJu = () => client.get(`/api/pac/j/`);
export const listPacsByNew = () => client.get(`/api/pac/n/`);
export const listPacsBySuc = () => client.get(`/api/pac/s/`);
