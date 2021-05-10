import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProjectAndClassSchema = new Schema({
    p_code: String,     //프로젝트 고유 코드
    p_title: String,    //프로젝트 제목
    p_explain: String,  //프로젝트 설명 
    p_cate: String,     //프로젝트 카테고리
    p_addr: String,     //프로젝트 접근주소
    p_tag: [String],    //프로젝트 태그 Array
    p_img: String,
    p_maker : {
        u_id : String,      //창작자 아이디
        m_name : String,    //창작자 이름
        m_profile: String,  //창작자 이미지
        m_intro: String,    //창작자 소개
        m_email: String,        // 창작자 이메일
        m_certification: Boolean,   //창작자 본인인증
        m_account: {                //창작자 계좌
            bankname: String,       //창작자 계좌 은행
            banknum: String         //창작자 계좌 번호
        }
    },
    p_startDate: Date,      //시작일
    p_lastDate: Date,       //마감일
    p_refund: String,       //선물 환불정책
    p_video: String,        //프로젝트 영상
    p_story: String,        //프로젝트 설명
    p_hit: Number,           //프로젝트 조회수
    p_state: String,        //프로젝트 허용??
    p_type: String,         //프로젝트와 클래스 구분 "p", "c"
    p_pick: String,
    p_project: {
        p_target: Number,       //프로젝트 목표금액------------ 프로젝트만
        p_present : [{          //프로젝트 선물
            pr_price: Number,   //선물 가격
            pr_name: String,    //선물 이름
            pr_gusung: [String]    //선물구성
        }]
    },
    p_class: {
        c_lesson : [{
            le_price: Number,   //레슨 가격
            le_name: String,    //레슨 이름
            le_intro: String,       //레슨 설명
            le_maxstudent: Number,  //레슨 최대인원
            le_date: Date,    //레슨 일
            le_startTime: String,  //레슨 시작시간
            le_endTime: String,  //레슨 종료시간
        }]    
    }
});
ProjectAndClassSchema.statics.findByIdAndUpdatebyPaddr = function (p_addr, data) {
    console.log(p_addr + '*******************');
    console.log(data);
    return this.update({ p_addr: p_addr }, { $set: { p_hit: data } });
};
const ProjectAndClass = mongoose.model('ProjectAndClass', ProjectAndClassSchema);//첫번째 파라미터: 스키마의 이름, 두번쨰 파라미터: 스키마의 객체

export default ProjectAndClass;