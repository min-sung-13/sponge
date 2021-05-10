import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { listRes } from '../../modules/res';
import '../../scss/style_class1.css';
import pick from '../../image/pick.png';
import { withRouter } from 'react-router-dom';
import ListDal from '../common/ListDal';
import LikeForm from '../common/LikeForm';
import styled from "styled-components";

const LoadingDiv = styled.div`
    width: 100%;
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

const PacItem = ({ pac, user, history }) => {
    const { p_img, p_pick, p_type, p_lastDate, p_startDate} = pac;

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

    return (
        <div className="before_li">
            <div className="best_img">
                <LikeForm user={user} history={history} pac={pac} />
                {p_pick ==="Y"?
                    <div className="pick">
                        <img src={pick} alt="이미지" />
                    </div>
                :
                <span></span>
                }
                
                <div className="class_img">
                    <img src={p_img} className="list_img_zone" alt="이미지" />
                </div>
            </div>
            <ListDal pac={pac} res={res} type={p_type}/>
        </div>
    );
};

const ListForm = ({pacs, loading, error, fms, fmc, fmo, ftag, history, user, sort}) => {
    if(error){
        return <div>에러가 발생했습니다.</div>
    }else{
        if(pacs){
            console.log(pacs);
            var q = pacs;
            q = q.filter(p => p.p_state === 'Y');
            if(fms){
                q = q.filter(p => p.p_type === fms);
            }
            if(fmc){
                q = q.filter(p => p.p_cate === fmc);
            }
            if(fmo){
                switch(fmo){
                    case '오픈예정':
                        q = q.filter(p => new Date(p.p_startDate) > new Date());
                        break;
                    case '진행중' : 
                        q = q.filter(p => new Date(p.p_lastDate) > new Date());
                        q = q.filter(p => new Date() > new Date(p.p_startDate));
                        break;
                    case '종료' :
                        q = q.filter(p => new Date(p.p_lastDate) < new Date());
                    default:

                }
            }
            if(ftag){
                console.log('여기는 오니/' + ftag);
                
                q = q.filter(p => p.p_tag.includes(ftag));
                console.log("q : " + JSON.stringify(q));
            }
            console.log("이곳의 정렬은? : " + sort)
            switch(sort){
                case '인기순': 
                    q.sort((function(a, b) {return b.p_hit - a.p_hit}));
                    break;
                case '최신순': 
                    q.sort((function(a, b) {return b.p_startDate - a.p_startDate}));
                    break;
                case '종료 임박순':
                    q.sort((function(a, b) {return a.p_lastDate - b.p_lastDate}));
                    break;
            }
            return(
                <>
                <div className="inner_box hi">
                <div className="best_class">
                    {!loading && q && (
                    <div>
                        {q.map(q => (
                            <PacItem pac={q} history={history} user={user}/>
                        ))}
                    </div>
                    )}
                </div>
                </div>
                </>
            );
        }else{
            return <div><LoadingDiv>Loading...</LoadingDiv></div>
        }
    }
};

export default withRouter(ListForm);
