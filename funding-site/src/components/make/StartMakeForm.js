import React from 'react';
import '../../scss/style_class1.css';
import { Link } from 'react-router-dom';
import img1 from '../../image/project_info/pro_up.png';
import img2 from '../../image/project_info/pro_go.png';
import img3 from '../../image/project_info/pro_make.png';

const AdvertisementForm = () => {
    return(
        <div id="wrap" className="clearBoth">
        <div id="pro_info">
            <div className="info_1">
                <div className="inner_center"> 
                <div className="info_first">
                    <div className="first_img">
                    </div>
                    <div className="first_text">
                        <h1>마음 속 프로젝트 아이디어,<br/> SPONGE에서 현실로.</h1>
                        <p>크라우드펀딩으로 프로젝트를 위한 자금도 모으고,<br/> 든든한 후원자 네트워크도 확보할 수 있습니다.</p>
                        <div className="pro_start">
                            <Link to="/makeAgree" className="pro_start_btn" target="_blank">지금 시작하기</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="info_2">
                <div className="second_text inner_box">
                    <div className="secon_text_div">
                    <h2>SPONGE에서 펀딩에 성공한<br/>
                    12,000개 프로젝트와 함께 하세요.</h2>
                    <p>디자인, 영화, 게임, 출판, 요리, 패션, 이벤트 …<br/>분야를 가릴 것 없이 수많은 창작자와 창업자들의 프로젝트들이 매일같이 올라오는 SPONGE는 한국에서 가장 활성화된 크라우드펀딩 커뮤니티입니다. 지금껏 12,000개 넘는 창조적인 시도들이 70만 명의 후원자를 만나 세상에 나왔습니다.</p>
                    </div>
                </div>
            </div>
            <div className="info_3">
                <div className="inner_box">
                <div className="third_text">
                    <h2>쉽게 시작할 수 있습니다.</h2>
                    <p>‘크라우드펀딩’은 어려울지 몰라도 SPONGE는 어렵지 않습니다. 수익을 내서 현금을 돌려주거나 소유권을 나누는 등의 복잡한 과정도 필요하지 않습니다. 펀딩으로 모은 금액을 통해 만들어낸 제품 또는 특별한 경험 그 자체를 후원자들과 약속하고 공유하면 됩니다.</p>
                    <div className="third_step">
                        <div className="step">
                            <div className="step_img">
                                <img src={img1} alt="프로젝트 올리기"/>
                            </div>
                            <div className="step_text">
                                <h2>프로젝트 올리기</h2>
                                <p>창작 아이디어를 소개하는 프로젝트 페이지를 작성합니다. 후원자들에게 금액대별 특별한 선물들을 약속합니다.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step_img">
                                <img src={img2} alt="펀딩 진행하기"/>
                            </div>
                            <div className="step_text">
                                <h2>펀딩 진행하기</h2>
                                <p>정해진 기간 동안 후원자를 모으기 위해 열심히 홍보합니다. 목표 금액을 달성해야만 후원금이 전달됩니다.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step_img">
                                <img src={img3} alt="만들고 보답하기"/>
                            </div>
                            <div className="step_text">
                                <h2>만들고 보답하기</h2>
                                <p>전달받은 후원금으로 창작에 돌입합니다. 틈틈히 진척사항을 알리고, 약속한 선물을 전달하면 프로젝트가 끝납니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="third_btn">
                        <Link to="/makeAgree" className="pro_btn" target="_blank">프로젝트 올리기 시작하기</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="info_4">
                <div className="inner_box">
                <div className="four_text">
                    <h2>누구에게나 열려 있습니다.</h2>
                    <div className="pro_who">
                        <div className="who_text">
                            <h3>창작자</h3>
                            <div className="who_line blue"></div>
                            <h4>평소 몰두했던 작업이나 구상만 하던 창작 아이디어를 본격적인 단계로 발전시킬 기회로 삼아보세요.</h4>
                            <p>시작하는 창작자에게 SPONGE는 지원금, 공모전 등의 방식들보다 훨씬 자율적이고 독립적으로 나와 내 작업을 알릴 수 있는 새로운 길입니다. 이미 콘텐츠와 팬층을 확보한 작가라면 신선한 기획을 통해 팬들을 만나는 새로운 창구를 열어보는 건 어떨까요?</p>
                        </div>
                        <div className="who_text">
                            <h3>브랜드</h3>
                            <div className="who_line purple"></div>
                            <h4>초기 비용이나 재고 부담 없이 새로운 제품이나 서비스를 론칭하고 코어 팬 베이스를 확보하세요.</h4>
                            <p>브랜드에 이목을 집중시키는 스토리를 통해 마케팅 효과를 극대화할 수 있습니다. 트렌디하면서도 개인의 취향과 가치가 강조되는 새로운 참여형 소비 창구로 각광받는 SPONGE에서 모인 후원자들의 신뢰는 일반 이커머스에서보다 훨씬 깊고 오래 가는 팬 베이스가 되어줄 것입니다.</p>
                        </div>
                        <div className="who_text">
                            <h3>클래스</h3>
                            <div className="who_line pink"></div>
                            <h4>트렌드에 기반한 다양한 클래스들을 통해 평소 구상하던 아이디어를 기초부터 배운 후 새로운 제품이나 브랜드를 론칭하고 지속가능한 후원으로 전환시켜보세요.</h4>
                            <p>언론이나 소셜미디어에서 떠오르는 이슈들을 구체적인 행동으로 전환시키는 데에 SPONGE 프로젝트가 제격입니다. 새롭고 젊은 정치참여·사회운동 방식으로 주목받는 SPONGE 펀딩으로 더 많은 지지자를 얻고, 사회적 목소리를 증폭시켜보세요.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="info_5">
                <div className="inner_box">
                <div className="five_text">
                    <h2>창조적인 도전을 잘 아는 사람들이 만듭니다.</h2>
                    <p>8년 전 대학생 두 명이 창작 활동을 위해 직접 서비스를 시작한 이래 SPONGE의 목표는 늘 하나였습니다. 누구나 쉽고 빠르고 똑똑하게 아이디어를 실현할 수 있도록 창조적인 시도를 위한 기반을 만드는 것. SPONGE 창작자와 후원자들은 독창적인 시도와 다양성이 존중받는 생태계를 함께 만들어가고 있습니다.</p>
                    <div className="five_good">
                        <div className="five_step">
                            <h3>낮은 수수료, 빠른 정산</h3>
                            <div className="five_line blue"></div>
                            <p>펀딩에 성공한 경우에만 5%의 수수료를 받습니다. 직관적인 프로젝트 작성 도구를 이용해 미리 발생할 수수료와 정산 일정을 계산해 볼 수 있어 첫 프로젝트도 쉽게 계획할 수 있습니다.</p>
                        </div>
                        <div className="five_step">
                            <h3>성공을 돕는 리소스</h3>
                            <div className="five_line purple"></div>
                            <p>펀딩 시작 전, 각 분야의 생태를 잘 아는 에디터가 프로젝트를 검토하고 피드백을 드립니다. 헬프센터 내 창작자 센터에는 각 단계별 성공을 위한 꼼꼼한 도움말이 준비되어 있습니다.</p>
                        </div>
                        <div className="five_step">
                            <h3>확산이 빠른 커뮤니티</h3>
                            <div className="five_line pink"></div>
                            <p>후원의 상당 부분이 70만 SPONGE 커뮤니티와 확장된 소셜네트워크에서 유입됩니다. 데이터에 기초해 스마트한 홍보와 진행을 할 수 있도록 노하우를 지원해 드리겠습니다.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="info_6">
                <div className="six_text">
                    <h1>프로젝트를 만들어보세요!</h1>
                    <p className="text_content">직관적인 프로젝트 편집 도구로 곧바로 작성을 시작할 수 있습니다.<br/>
                    프로젝트를 공개할 준비가 되었을 때 에디터의 검토를 거치면 됩니다.<br/>
                    궁금한 점이 있으면 언제든지 <a href="#">문의를 남겨주세요.</a></p>
                    <Link to="/makeAgree" className="start_btn" target="_blank" >지금 시작하기</Link>
                    <p>제휴·협력 문의는<br/>
                    partnership@sponge.com 으로 부탁드립니다.</p>
                </div>
            </div> 
        </div>
        </div>
    );
};

export default AdvertisementForm;
