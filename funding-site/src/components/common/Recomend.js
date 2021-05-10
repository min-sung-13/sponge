import React from 'react';
import '../../scss/mingcss.css';
import p4 from '../../image/project4.jpg';
import p5 from '../../image/project5.jpg';
import p6 from '../../image/project6.jpg';
import p7 from '../../image/project7.jpg';
import l1 from '../../image/like1.png';
import l2 from '../../image/like2.png';
import classIcon from '../../image/classIcon.png';
import projectIcon from '../../image/projectIcon.png';

const Recomend = () => {
    const color = "text_color_g5";
    const changeImg = e => {
        if(e.target.src === l1) {
            e.target.src = l2;
        }else {
            e.target.src = l1;
        }
    }

    return (
        <>
           <div class="bottom">
                <div class="inner_box">
                    <h3>이런 프로젝트는 어떠세요?</h3>
                    <div class="hit_project">
                    <div className="project">
                        <div className="project_imgOnimg">
                            <div className="img_div">
                                <img alt="이미지" src={p4} className="proj_img"/>
                            </div>
                            <div className="heart_img">
                                <img alt="이미지" src={l1}  onClick={changeImg}/>
                            </div>
                        </div>
                        <div className="p_cate">문구 | 기타<img alt="이미지" src={projectIcon} className="classOrprojectIcon"/></div>
                        <div className="p_title">지나가기만 해도 향기가 풀풀 나는 첨단샴푸 '샴poo'</div>
                        <div className={`p_dal ${color}`}>120% 달성</div>
                    </div>
                    <div className="project">
                        <div className="project_imgOnimg">
                            <div className="img_div">
                                <img alt="이미지" src={p5}  className="proj_img"/>
                            </div>
                            <div className="heart_img">
                                <img alt="이미지" src={l1} />
                            </div>
                        </div>
                        <div className="p_cate">문구 | 기타<img alt="이미지" src={projectIcon} className="classOrprojectIcon"/></div>
                        <div className="p_title">어른들의 지적 성장 도전기, 자기계발 학습지 '쓸모'가 아니라 볼펜 '무쓸모'</div>
                        <div className={`p_dal ${color}`}>120% 달성</div>
                    </div>
                    <div className="project">
                        <div className="project_imgOnimg">
                            <div className="img_div">
                                <img alt="이미지" src={p6} className="proj_img"/>
                            </div>
                            <div className="heart_img">
                                <img alt="이미지" src={l1} />
                            </div>
                        </div>
                        <div className="p_cate">문구 | 기타<img alt="이미지" src={classIcon} className="classOrprojectIcon"/></div>
                        <div className="p_title">여러가지 학용품은 다여기있다!!</div>
                        <div className={`p_dal ${color}`}>120% 달성</div>
                    </div>
                    <div className="project">
                        <div className="project_imgOnimg">
                            <div className="img_div">
                                <img alt="이미지" src={p7}  className="proj_img"/>
                            </div>
                            <div className="heart_img">
                                <img alt="이미지" src={l1}/>
                            </div>
                        </div>
                        <div className="p_cate">문구 | 기타<img alt="이미지" src={classIcon} className="classOrprojectIcon"/></div>
                        <div className="p_title">내 피부를 진정시키는 진정한 수분크림 '나도몰라'</div>
                        <div className={`p_dal ${color}`}>120% 달성</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Recomend;