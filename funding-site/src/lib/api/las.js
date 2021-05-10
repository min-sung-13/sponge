import client from "./client";

export const addLas = ({ls_type, ls_myid, ls_productcode, ls_signtext}) =>
  client.post("/api/likeSign", {ls_type, ls_myid, ls_productcode, ls_signtext});
export const deleteLas = ({ ls_type, ls_myid, ls_productcode}) =>
{
  console.log(ls_type + ", " + ls_myid + ", " + ls_productcode);
  client.delete(`/api/likeSign/${ls_type}/${ls_myid}/${ls_productcode}`);
}
export const checkLas = ({ ls_type, ls_myid, ls_productcode}) =>
client.post("/api/likeSign/check", { ls_type, ls_myid, ls_productcode});

export const listLas = () => client.get('/api/likeSign');

