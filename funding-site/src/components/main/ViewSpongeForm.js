import React, {useEffect} from 'react';
import '../../scss/mingcss.css';

import classIcon from '../../image/classIcon.png';
import projectIcon from '../../image/projectIcon.png';
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import LikeForm from '../common/LikeForm';
import Dal from '../common/Dal';
import Cham from '../common/Cham';
import { useDispatch, useSelector} from 'react-redux';
import { listRes } from '../../modules/res';


const LoadingDiv = styled.div`
    width: 1060px;
    display: inline-block;
    background-color: white;
    color: #3d3d3d;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    padding-top:200px;
    height: 400px;
    margin-bottom: 100px;
    box-sizing: border-box;
    @media(max-width: 1059px) {
        width:100%;
    }
`;

const ViewSpongeForm = ({title, color, pacs, user, history}) => {

    const dispatch = useDispatch();
    const { res } = useSelector(
        ({ res }) => ({
            res: res.res
        })
    );

    useEffect(()=>{
        dispatch(
            listRes()
        );
    },[dispatch])

    if(pacs){
        return(
            <>
                <div>
                    <div className="inner_box" id="cate">
                        {title === 'notable' && (<div className="cate_font">주목할 만한 <span className={`${color} span_sponge_text`}>SPONGE</span></div>)}
                        {title === 'hot' && (<div className="cate_font">인기 추천 <span className={`${color} span_sponge_text`}>SPONGE</span></div>)}
                        {title === 'success' && ( <div className="cate_font">종료 임박 <span className={`${color} span_sponge_text`}>SPONGE</span></div>)}
                        {title === 'new' && (<div className="cate_font">신규 추천 <span className={`${color} span_sponge_text`}>SPONGE</span></div>)}
                        <div className="hit_project">
                            {pacs.map(p => (
                                <>
                                    {p.p_state === 'Y' && 
                                    (<div className="project">
                                        <div className="project_imgOnimg">
                                            <div className="img_div">
                                                <img alt="이미지" src={p.p_img}  className="proj_img"/>
                                            </div>
                                            <LikeForm user={user} history={history} pac={p}/>
                                        </div>
                                        <Link to={`/projectDetail/${p.p_addr}`}>
                                            <div className="p_cate">{p.p_cate}
                                                {p.p_type === "C" && (<img src={classIcon} className="classOrprojectIcon" alt="클래스이미지"/>)}
                                                {p.p_type === "P" && (<img src={projectIcon} className="classOrprojectIcon" alt="프로젝트이미지"/>)}
                                            </div>
                                            <div className="p_title">{p.p_title}</div>
                                        </Link>
                                        {p.p_type ==="C" && (<Cham pac={p} res={res} color={color} />)}
                                        {p.p_type ==="P" && (<Dal pac={p} res={res} color={color} />)}
                                    </div>)
                                    } 
                                </>
                            ))}
                            <div className="button_div">
                                {title === 'hot' && (<Link to="/list" ><input type="button" value="인기 추천 스펀지 더보기" className="dubogi_btn"/></Link>)}
                                {title === 'success' && (<Link to="/list" ><input type="button" value="종료 임박 스펀지 더보기" className="dubogi_btn"/></Link>)}
                                {title === 'new' && (<Link to="/list" ><input type="button" value="신규 추천 스펀지 더보기" className="dubogi_btn"/></Link>)}
                            </div>
                        </div>
                    </div> 
                </div>
            </>
        );
    }else{
        return(
            <div className="inner_box" id="cate">
                <LoadingDiv>Loading...</LoadingDiv>
            </div>
        )
    }
};

export default withRouter(ViewSpongeForm);
