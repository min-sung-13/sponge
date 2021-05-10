import React from 'react';
import '../../scss/style_class1.css';
import { withRouter } from 'react-router-dom';
import LikeForm from '../../components/common/LikeForm';
import classIcon from '../../image/classIcon.png';
import projectIcon from '../../image/projectIcon.png';
import { Link } from 'react-router-dom'
import Cham from '../common/Cham';
import MyDal from '../common/MyDal';

const Mpmyclass = ({user, pac, history, res}) => {
    const color = "text_color_g3";

    var madebymeproject;
    if( pac ){
        console.log(pac)
        console.log(user)
        madebymeproject = pac.filter(t => t.p_type === "C" && t.p_maker.u_id === user.u_id);
        console.log(madebymeproject)
    }
    return(
        <>
            <div className="myPageTitle">내가 제작한 클래스</div>
            <div className="myPageExpain">내가 제작한 클래스 내역입니다.</div>
            <div className="best_class">
            <div className="hit_project">
                {madebymeproject.map(p => (
                    <div className="project2">
                    <div className="project_imgOnimg">
                        <div className="img_div">
                            <img alt="이미지" src={p.p_img}  className="proj_img"/>
                        </div>
                    </div>
                    <Link to={`/projectDetail/${p.p_addr}`}>
                    <div className="p_cate">{p.p_cate}
                    {p.p_type === "C" && (<img src={classIcon} className="classOrprojectIcon" alt="이미지"/>)}
                    {p.p_type === "P" && (<img src={projectIcon} className="classOrprojectIcon" alt="이미지"/>)}
                    </div>
                    <div className="p_title2">{p.p_title}</div>
                    </Link>
                    {p.p_state === "D" && (<div className="deagi"><span className="gd">승인 대기중</span></div>)}
                    {p.p_state === "N" && (<div className="deagi"><span className="gd">승인 거절됨</span></div>)}
                    {p.p_state === "Y" && (
                        <span>
                            <span>{p.p_type ==="C" && (<Cham pac={p} res={res} color={color}/>)}</span>
                            <span>{p.p_type ==="P" && (<MyDal pac={p} res={res} color={color}/>)}</span>
                            <div style={{'textAlign' : 'center'}}><button className="deagib2"><span>대시보드로 가기</span></button></div>
                        </span>
                    )}
                    
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default withRouter(Mpmyclass);
