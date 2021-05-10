import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/footer.css';
import fund_underImg from '../../image/fund_under.jpg';
import appleAppImg from '../../image/appleApp.jpg';
import androidAppImg from '../../image/androidApp.jpg';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div id="foot_01">
                    <div className="inner_box">
                        <div className="foot_01_list">
                            <Link to="/">회원가입약관</Link >
                        </div>
                        <div className="foot_01_list">
                            <Link to="/">서비스이용약관<img src={fund_underImg} className="fund_under" alt="이미지"/></Link >
                        </div>
                        <div id="my_info_rule" className="foot_01_list">
                            <Link to="/">개인정보처리방침</Link >
                        </div>
                        <div className="foot_01_list">
                            <Link to="/">운영정책<img src={fund_underImg} className="fund_under" alt="이미지"/></Link >
                        </div>
                        <div className="foot_01_list">
                            <Link to="/">제휴문의<img src={fund_underImg} className="fund_under" alt="이미지"/></Link >
                        </div>
                        <div className="foot_01_list">
                            <Link to="/">공지사항</Link >
                        </div>
                        <div className="foot_01_list">
                            <Link to="/">인재채용</Link >
                        </div>
                        <div className="foot_01_list">
                            <Link to="/">SNS<img src={fund_underImg} className="fund_under" alt="이미지"/></Link >
                        </div>
                    </div>
                </div>
                <div id="foot_02">
                    <div className="inner_box">
                        <div className="foot_02_list" id="foot_02_list01">
                            <p className="fontB">스펀지 대표 고객센터</p>
                            <span className="fontG">1234-5678  </span>
                            <span className="fontG"> | 카카오톡 채널@스펀지 | </span>
                            <span>info@sponge.kr |</span>
                            <p className="fontG">W9 멤버십 고객센터 1111-9999</p>
                        </div>
                        <div className="foot_02_list" id="foot_02_list02">
                            <p>
                            <span>스펀지플랫폼(주) | </span>
                            <span>대표이사 김민성 | </span>
                            <span>사업자등록번호 111-11-11111 |</span>
                            </p>
                            <p>서울특별시 강남구 테헤란로 146 현익빌딩 4층  E클래스(신한은행건물)</p>
                            <p className="fontB">© SPONGE Platform Co., Ltd.</p>
                        </div>
                        <div className="appLogoList">
                            <div className="appLogo">
                            <Link to="/"><span className="logoT"> ios 앱</span><img src={appleAppImg} alt="" className="logoImg"/></Link >
                            </div>
                            <div className="appLogo">
                            <Link to="/"><span className="logoT">안드로이드 앱</span><img src={androidAppImg} alt="" className="logoImg"/></Link >
                            </div>    
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
};

export default Footer;