import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../scss/mingcss.css';
import menuImg from '../../image/menu.png';
import logoImg from '../../image/only_logo.png';
import profileImg from '../../image/profile3.png';

const Header = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    console.log(user);
    return (
        <>
            <div className="inner_box head_div">
                    <img src={menuImg} alt="메뉴" className="menuimg"/>
                    <div><Link to="/list">둘러보기</Link></div>
                    <div><Link to="/startMake">제작하기</Link></div>
                    <div id="logo">
                        <Link to="/"><img src={logoImg} alt="로고" id="logo_img"/></Link>
                    </div>
                    <div className="right andimg">
                    <Link to="/myPage">
                        { user ? <img src={(user.u_profile == 'profile') ? profileImg : user.u_profile} alt="프로필" /> : <img src={profileImg} alt="프로필" /> }
                    </Link>
                    </div>
                    <div className="right side">
                        { user ? 
                        <Link to="/myPage">{ user.username } 님</Link> : 
                        ( <p><Link to="/login">로그인</Link> / <Link to="/join">회원가입</Link></p> ) }
                    </div>
            </div>
        </>
    )
};

export default Header;