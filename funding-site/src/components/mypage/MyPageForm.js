import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../modules/user';
import '../../scss/mingcss.css';
import '../../scss/style_class1.css';
import { RiHandHeartLine } from 'react-icons/ri';
import { AiOutlineRight, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BiEditAlt,BiHomeSmile } from 'react-icons/bi';
import {FaChalkboardTeacher} from 'react-icons/fa';
import profileImg from '../../image/profile3.png';
import pointimg from '../../image/point2.png';
import pointPage from '../../image/row.png';
import nonePointPage from '../../image/row2.png';
import $ from 'jquery';
import Mphome from './Mphome';
import Mppoint from './Mppoint';
import Mplike from './Mplike';
import Mpsign from './Mpsign';
import Mpmyproject from './Mpmyproject';
import Mpmyclass from './Mpmyclass';
import Mpedit from './Mpedit';
import Mpres from './Mpres';


const MyPageForm = ({ form, onChange, onSubmit, error, fileSelectHandler, url , point, las, pac, res}) => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const history = useHistory();

    if(!user){
        alert("로그인 후 이용해주세요.");
        history.push("/login");
    }

    const onLogout = () => {
        dispatch(logout());
        alert("로그아웃 되었습니다.");
        history.push("/");
    };

    const [p, setP] = useState(0);

    const onClick = e => {
        setP(e.target.getAttribute('data'));
    }

    const obj = {
        0:<Mphome user={user} res={res} onClick={onClick} pac={pac}/>,
        1:<Mppoint user={user} point={point}/>,
        2:<Mplike user={user} las={las} pac={pac} res={res} history={history}/>,
        3:<Mpsign las={las} user={user} pac={pac} history={history}/>,
        4:<Mpmyproject user={user} pac={pac} history={history} res={res}/>,
        5:<Mpmyclass user={user} pac={pac} history={history} res={res}/>,
        6:<Mpedit user={user} fileSelectHandler={fileSelectHandler} onSubmit={onSubmit} onChange={onChange} error={error} url={url}/>,
        7:<Mpres user={user} res={res} pac={pac}/>
    }
    return(
        console.log(form),
        <>
            <div className="fitContent">
                <div class="myPage">
                    <div className="colorBar"> </div>
                    <div class="inner_box">
                        <div class="inner_box yap">
                            <div class="myPageMain">
                                <div class="myPage_left_zone">
                                    <div className="ssstatic">
                                        <div className="profile_img_w">
                                            <img src={user ? ((user.u_profile == "profile") ? profileImg : user.u_profile) : profileImg } alt="프로필" id="profile_img"/>
                                            <div className="bungbung" onClick={onClick} data="6">
                                                <BiEditAlt size="14"onClick={onClick} data="6" />
                                            </div>
                                        </div>
                                        { user ? <div class="name_zone">{ user.username } 님</div> : <div class="name_zone"></div> }
                                    </div>
                                    <div>
                                        { user ? <><div class="logout_btn" onClick={ onLogout }>로그아웃</div></> : <div class="logout_btn"><Link to="/login">로그인</Link></div> }
                                    </div>
                                    <div class="text_align_left supporter_zone">
                                        <div onClick={onClick} data="0"><BiHomeSmile size="23" class="iconimg"/>홈<AiOutlineRight class="bt_img"/></div>
                                        <div onClick={onClick} data="1"><img src={pointimg} alt="p" class="iconimg_p"/>포인트<AiOutlineRight class="bt_img"/></div>
                                        <div onClick={onClick} data="2"><IoMdHeartEmpty size="23" class="iconimg" />좋아한<AiOutlineRight class="bt_img" /></div>
                                        <div onClick={onClick} data="3"><RiHandHeartLine size="23" class="iconimg" />지지서명<AiOutlineRight class="bt_img" /></div>
                                        {/* <div class="edit_userinfo"><BiEditAlt size="23" class="iconimg"/>정보수정<AiOutlineRight class="bt_img"/></div> */}
                                        <div onClick={onClick} data="4" class="edit_userinfo"><AiOutlineFundProjectionScreen size="23" class="iconimg"/>나의 프로젝트<AiOutlineRight class="bt_img"/></div>
                                        <div onClick={onClick} data="5" class="edit_userinfo"><FaChalkboardTeacher size="23" class="iconimg"/>나의 클래스<AiOutlineRight class="bt_img"/></div>
                                        
                                    </div>
                                </div>
                                <div  class="myPage_right_zone">
                                    {obj[p]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hight_100"> </div>
                </div>
            </div>
        </>
    )
}
export default MyPageForm;