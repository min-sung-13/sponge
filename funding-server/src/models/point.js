import mongoose from "mongoose";

const { Schema } = mongoose;

const P_point = new Schema({
    u_id: String,           // 유저아이디
    u_getPoint: {           // 적립 포인트
      type: Number,
      default: 0
    },     
    u_usePoint: {           // 사용 포인트
      type: Number,
      default: 0
    },
    u_updateDate: {
      type: Date,
      default: Date.now()    // 포인트 업데이트 날짜 
    } 
});

P_point.statics.findByUserId = function (u_id) {
  // console.dir(this);
    return this.findOne({ u_id });
};

const Point = mongoose.model("Point", P_point);

export default Point;
