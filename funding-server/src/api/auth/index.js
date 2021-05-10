import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";

const auth = new Router();

auth.post("/register", authCtrl.register);
auth.post("/kakao_reg", authCtrl.kakao_reg);
auth.post("/naver_reg", authCtrl.naver_reg);
auth.post("/login", authCtrl.login);
auth.post("/kakao_login", authCtrl.kakao_login);
auth.post("/naver_login", authCtrl.naver_login);
auth.get("/check", authCtrl.check);
auth.post("/logout", authCtrl.logout);
auth.patch("/updateInfo", authCtrl.updateInfo);
auth.get("/", authCtrl.userList);

export default auth;
