import Router from 'koa-router';
import projectandclass from './projectandclass';
import posts from './notice';
import reservation from'./reservation';
import likeSign from './likeSign';
import auth from "./auth";
import point from "./point"; 
import coupon from "./coupon";
import advertise from "./advertise";


const api = new Router();

api.use('/pac', projectandclass.routes());
api.use('/notice', posts.routes());
api.use('/reservation', reservation.routes());
api.use('/likeSign', likeSign.routes());
api.use("/auth", auth.routes());
api.use("/point", point.routes());
api.use("/coupon", coupon.routes());
api.use("/advertise", advertise.routes());

export default api;