import mongoose, { Schema } from "mongoose";

const P_Coupon = new Schema({
    u_id: String,
    coupon_name: String,        // 쿠폰 이름
    coupon_explain: String,     // 쿠폰 설명
    coupon_minpaymoney: Number,       // 쿠폰 사용시 필요한 최저 가격
    coupon_price: Number,             // 쿠폰 할인금액
    coupon_enddate: Date,       // 쿠폰 마감일
});

P_Coupon.statics.findByUsername = function (u_id) {
    // console.dir(this);
    return this.findOne({ u_id });
};

const Coupon = mongoose.model("Coupon", P_Coupon);

export default Coupon;
