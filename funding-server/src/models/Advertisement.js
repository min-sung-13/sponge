import mongoose from "mongoose";

const { Schema } = mongoose;

const P_Adv = new Schema({
    a_userid: String,       // 신청자 id
    a_title: String,        // 광고 제목
    a_title2: String,
    a_content: String,      // 광고 내용
    a_color: String,        // 광고 테마색
    a_img: String,          // 광고 이미지
    a_startdate: Date,      // 광고 시작일
    a_enddate: Date,        // 광고 마감일
    a_allow: String,       // 광고 (관리자에게)허락여부      
    a_price: Number         // 광고 가격
});

P_Adv.statics.findByUserId = function (a_userid) {
    // console.dir(this);
    return this.findOne({ a_userid });
};

const Advertisement = mongoose.model("Advertisement", P_Adv);

export default Advertisement;


