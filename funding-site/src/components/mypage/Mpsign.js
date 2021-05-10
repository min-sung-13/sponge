import React from 'react';
import '../../scss/style_class1.css';
import { withRouter, Link } from 'react-router-dom';
import LikeForm from '../common/LikeForm';
import classIcon from '../../image/classIcon.png';
import projectIcon from '../../image/projectIcon.png';

const Mysign = ({las, pac, user, history}) => {

    var mll;
    var mp=[];
    if(las){
        mll = las;
        mll = mll.filter(k => k.ls_type === 'sign' && k.ls_myid === user.u_id);
        console.log(mll);
        for(var o = 0; o <mll.length; o++){
            for(var e = 0; e < pac.length; e++){
                if(pac[e]._id === mll[o].ls_productcode){
                    mp.push(pac[e]);
                }
            }
        }
        return(
            <>
                <div className="myPageTitle">지지서명</div>
                <div className="myPageExpain">내가 좋아한 스폰지 내역입니다.</div>
                <div className="best_class">
                <div className="hit_project">
                {mll.map(p => pac.map(v => v._id === p.ls_productcode && (
                    <div className="project2">
                    <div className="project_imgOnimg">
                        <div className="img_div">
                            <img alt="이미지" src={v.p_img}  className="proj_img"/>
                        </div>
                        <LikeForm user={user} history={history} pac={v}/>
                    </div>
                    <Link to={`/projectDetail/${v.p_addr}`}>
                    <div className="p_cate">{v.p_cate}
                    {v.p_type === "C" && (<img src={classIcon} className="classOrprojectIcon" alt="이미지"/>)}
                    {v.p_type === "P" && (<img src={projectIcon} className="classOrprojectIcon" alt="이미지"/>)}
                    </div>
                    <div className="p_title2">{v.p_title}</div>
                    </Link>
                    <div className="p_cate">나의 지지서명</div>
                    <div className="www"><div className="signtext1">{p.ls_signtext}</div></div>
                    </div>
                )))}
            </div>
            </div>
            </>
        );
    }else{
        return(
            <div>그딴거없음</div>
        )
    }

    
};

export default withRouter(Mysign);
