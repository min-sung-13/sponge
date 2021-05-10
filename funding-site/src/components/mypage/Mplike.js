import React from 'react';
import '../../scss/style_class1.css';
import { withRouter} from 'react-router-dom';
import LikeForm from '../../components/common/LikeForm';
import Dal from '../common/Dal';
import classIcon from '../../image/classIcon.png';
import projectIcon from '../../image/projectIcon.png';
import { Link } from 'react-router-dom'
import Cham from '../common/Cham';

const Mplike = ({ user, pac, history, res, las}) => {

    const color = "text_color_g1";
    var myp;
    var mlas;
    var myp2=[];
    if(pac){
        myp = pac;
        mlas = las;
        mlas = mlas.filter(q => q.ls_myid === user.u_id && q.ls_type === 'like');
        console.log("mlas : " + JSON.stringify(mlas));
        for(var oo = 0; oo < myp.length; oo++){
            for(var kk = 0; kk < mlas.length; kk++){
                if(myp[oo]._id === mlas[kk].ls_productcode){
                    myp2.push(myp[oo]);
                }
            }
        }
        console.log("myp2 : " + myp2.length);
    }
    if(res){
        console.log('res있찌')
    }else{
        console.log('res없찌')
    }
    
    return(
        <>
            <div className="myPageTitle">좋아한</div>
            <div className="myPageExpain">내가 좋아한 스폰지 내역입니다.</div>
            <div className="best_class">
            <div className="hit_project">
                {myp2.map(p => (
                    <div className="project2">
                    <div className="project_imgOnimg">
                        <div className="img_div">
                            <img alt="이미지" src={p.p_img}  className="proj_img"/>
                        </div>
                        <LikeForm user={user} history={history} pac={p}/>
                    </div>
                    <Link to={`/projectDetail/${p.p_addr}`}>
                    <div className="p_cate">{p.p_cate}
                    {p.p_type === "C" && (<img src={classIcon} className="classOrprojectIcon" alt="이미지"/>)}
                    {p.p_type === "P" && (<img src={projectIcon} className="classOrprojectIcon" alt="이미지"/>)}
                    </div>
                    <div className="p_title">{p.p_title}</div>
                    </Link>
                    {p.p_type ==="C" && (<Cham pac={p} res={res} color={color}/>)}
                    {p.p_type ==="P" && (<Dal pac={p} res={res} color={color}/>)}
                    
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default withRouter(Mplike);
