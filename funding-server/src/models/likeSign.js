import mongoose, {Schema} from 'mongoose';

const  P_LikeAndSign = new Schema ({
    ls_type: String,    //ls타입 (like or sign)
    ls_myid: String,    //내 아이디
    ls_productcode: String, //클래스 or 프로젝트 고유코드
    ls_signtext: String

    });

P_LikeAndSign.statics.selectremove = async function(type, myid, productcode){
    this.deleteMany({ls_type: type, ls_myid: myid, ls_productcode: productcode}, function (){
        console.log(type + ', ' + myid + ", " + productcode + "삭제함");
    });
    
};

const likeSign = mongoose.model('likeSign', P_LikeAndSign);


export default likeSign;

