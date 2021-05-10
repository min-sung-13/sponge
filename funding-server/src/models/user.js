import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const P_user = new Schema({
  u_id: String,
  hashedPassword: String,
  u_username: String,
  u_profile: {
    type: String,
    default: 'profile'
  }   // 프로필사진
});

P_user.methods.setPassword = async function(u_password) {
  const hash = await bcrypt.hash(u_password, 10);
  this.hashedPassword = hash;
};
P_user.methods.checkPassword = async function(u_password) {
  const result = await bcrypt.compare(u_password, this.hashedPassword);
  return result;
};
P_user.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};
P_user.methods.updateUsername = function(u_username) {
  const newUsername = u_username;
  return newUsername;
};

P_user.methods.generateToken = function () {
  const token = jwt.sign(
    {
      // 토큰 안에 집어놓고 싶은 데이터
      u_id: this.u_id,
      username: this.u_username,
      u_profile: this.u_profile,
    },
    process.env.JWT_SECRET, //JWT 암호
    {
      expiresIn: "7d", //7일 유지
    }
  );
  return token;
};

P_user.statics.findByUsername = function (u_id) {
  // console.dir(this);
  return this.findOne({ u_id });
};

const User = mongoose.model("User", P_user);

export default User;
