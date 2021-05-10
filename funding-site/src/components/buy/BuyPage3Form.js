import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/filterbar.css';
import Recomend from '../common/Recomend';


const BuyPage3Form = ({user, pac, las, SubmitSign}) => {

    const [stext, setStext] = useState('응원합니다 ♥');

    const changeStext = e => {
        setStext(e.target.value);
    }

    const letSign = () =>{
        if(stext === ''){
            alert('응원 메세지를 입력해주세요!');
            return;
        }
        SubmitSign('sign', user.u_id, pac._id, stext);
    }


    if(pac && las){
        var flas = las.filter(k => k.ls_type === 'sign' && k.ls_productcode === pac._id);
        return(
            <div id="page-container">
            <div id="reward-funding-complete-app">
                <div class="RewardFundingCompleteWrapper_container__2QfwD">
                    <h2 class="FundingCompleteTitle_title__27kKO">펀딩 완료 
                        <span role="img" aria-label="emoji">🎉</span>
                    </h2>
                    <div class="FundingInfoWrapper_container__B-kEb">
                        <div class="FundingInfoProfile_container__2ycVu">
                            <span class="FundingInfoProfile_profile__2JeiX">
                                <span class="Avatar_wrap__1H4VB">
                                    <span class="Avatar_picture__2CRnL Avatar_visible__1GVUZ idontknowthis1" >
                                    </span>
                                </span>
                            </span>
                            <span class="FundingInfoProfile_profile__2JeiX">
                                <span class="Avatar_wrap__1H4VB">
                                    <span class="Avatar_picture__2CRnL Avatar_visible__1GVUZ idontknowthis2">
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div class="FundingInfoDesc_container__1K3UW">
                            <h2 class="FundingInfoDesc_title__2q56_">
                                든든한 서포터 {user.username}님<br/>펀딩해 주셔서 감사합니다.
                            </h2>
                            <p class="FundingInfoDesc_whenPayFor__1XAu9">
                                <strong>결제 예정일 : {new Date(pac.p_lastDate).getFullYear()}년 {new Date(pac.p_lastDate).getMonth() + 1}월 {new Date(pac.p_lastDate).getDate()}일</strong>프로젝트 성공 시에만 결제됩니다.
                            </p>
                        </div>
                    </div>
                    <div class="SupportSignatureWrapper_container__2uSuz">
                        <strong>아직 끝나지 않았습니다.<br/>지지서명으로 프로젝트를 응원하세요 
                            <span role="img" aria-label="emoji">
                                    👏
                            </span>
                        </strong>
                        <div class="CampaignSupportSignature_contents__3h556">
                            <p class="CampaignSupportSignature_count__2zlpi">
                                <strong>{flas.length}명</strong>이 지지서명에 참여중입니다.
                            </p>
                            <div class="CampaignSupportSignature_button__34-jM">
                                <input type="text" className="sing_input_text" value={stext} onChange={changeStext}/>
                                <button type="button" class="wz button circular" onClick={letSign}>지지서명 하기
                                    <i class="icon campaign-cheer-o CampaignSupportSignature_icon__ZYTXN" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="FundingPaymentHistoryDirect_container__34Zci">
                        <p class="FundingPaymentHistoryDirect_desc__2N3OW">
                            결제 예약 결과 및 배송 예상일 조회는<br/>나의 펀딩현황에서 확인하세요.
                        </p>
                        <Link to="/myPage" class="wz button primary">
                                펀딩 내역 보러가기
                        </Link>
                    </div>
                </div>
            </div>
            <Recomend />
        </div>  
        );
    }else{
        return(
            <div>뭐임???</div>
        )
    }

    
};

export default BuyPage3Form;
