import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../scss/style_class1.css'; 
import styled from 'styled-components';
import $ from 'jquery';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from 'react-login-by-naver';

const ErrorMessage = styled.div`
    color: #B322F8;
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`;

const KakaoButton = styled(KakaoLogin)`
`;

class AuthForm extends Component {
    
    componentDidMount = () => {
        $('.email_btn').on("click", function() {
            $('.join_email').css('display', 'none');
            $('.join_email_detail').css('display', 'block');
        }); 
        $('.kakao').removeAttr('style');
        $('.join_kakao').text('카카오 아이디로 가입하기');
        $('.login_kakao').text('카카오 아이디로 로그인');

    }
    constructor(props) {
        super(props);
        this.state = {
            u_id: '',
            u_username: '',
            u_profile: ''
        }
    }
    responseFail = (err) => {
        console.log(err);
    }
    // 카카오 가입
    responseKaKao = (res) => {
        console.log("------------responseKakao 호출-----------")
        this.setState({
            u_id: res.profile.kakao_account.email,
            u_username: res.profile.properties.nickname,
            u_profile: res.profile.properties.profile_image
        });
        const kakaoUser = this.state;
        console.log(kakaoUser);
        // alert('회원가입 -> 로그인');
        this.props.kakaoReg({kakaoUser});
        // this.props.history.push('/login');
    };
    // 카카오 로그인 
    responseKakaoLogin = (res) => {
        console.log("------------responseKakaoLogin 호출-----------")
        this.setState({
            u_id: res.profile.kakao_account.email,
            u_username: res.profile.properties.nickname,
            u_profile: res.profile.properties.profile_image
        });
        const kakaoLoginUser = this.state;
        console.log({kakaoLoginUser});
        alert('카카오 로그인 -> 메인');
        this.props.kakaoLogin({kakaoLoginUser});
        // this.props.history.push('/main');
    };

    naverFailure = (err) => {
        console.error(err)
    }
    // 네이버 가입
    naverRegSuccess = (res) => {
        console.log('naverRegSuccess 진입');
        this.setState({
            u_id: res.email,
            u_username: res.nickname,
            u_profile: res.profile_image
        });
        const NaverRegUser = this.state;
        console.log({NaverRegUser});
        this.props.naverReg({NaverRegUser});
    };
    // 네이버 로그인
    naverLoginSuccess = (res) => {
        console.log("------------naverLoginSuccess 호출-----------")
        this.setState({
            u_id: res.email,
            u_username: res.nickname,
            u_profile: res.profile_image
        });
        const naverLoginUser = this.state;
        console.log({naverLoginUser});
        alert('네이버 로그인 -> 메인');
        this.props.naverLogin({naverLoginUser});
    };

    render() {
        console.log("rednder 진입")
        return(
            <>
            { this.props.type === 'login' && (
                console.log(this.props.form),
                console.log("--- authForm 로그인 진입 ---"),
                <div className="login">
                    <div class="login_area">
                        <div class="login_sns">
                            <KakaoButton className="kakao login_kakao"
                                jsKey={"ceea767be377668022d07eef7ecd4593"}
                                ButtonText="zkzkdh"
                                onSuccess={this.responseKakaoLogin}
                                onFailure={this.responseFail}
                                getProfile={true}
                            />
                            <NaverLogin className="naver"
                                clientId="ZD_mMCDSav5Vzl_dMqxM"
                                callbackUrl="http://localhost:3000/login"
                                render={(props) => <button onClick={props.onClick} className="naver">네이버 아이디로 로그인</button>}
                                onSuccess={ this.naverLoginSuccess }
                                onFailure={ this.naverFailure }
                            />
                        </div>
                        <div class="or_login">
                            <span>
                                <span>또는</span>
                            </span>
                        </div>
                        <div class="login_email">
                            <input type="text" name="u_id" class="login_e text" placeholder="이메일 주소 입력" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } />
                            <input type="password" name="u_password" class="login_e text" placeholder="비밀번호 입력" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } />
                            <div>{ this.props.error && <ErrorMessage>{ this.props.error }</ErrorMessage> }</div>
                            <button type="submit" class="login_e btn" onClick={ this.props.onSubmit }>로그인</button>
                        </div>
                        <div class="goto_join">
                            <Link to="/join">아직 계정이 없으신가요? <span>스폰지 가입하기</span></Link>
                        </div>
                        <div class="find_pw">
                            <a href="https://www.naver.com/">혹시 비밀번호를 잊으셨나요?</a>
                        </div>
                    </div>
                </div>
            )}
            { this.props.type === 'join' && (
                console.log(this.props.form),
                console.log("--- authform 회원가입 진입 ---"),
                <div class="join">
                    <div class="join_area">
                        <div class="join_sns">
                            <KakaoButton className="kakao join_kakao"
                                jsKey={"ceea767be377668022d07eef7ecd4593"}
                                ButtonText="zkzkdh"
                                onSuccess={ this.responseKaKao }
                                onFailure={ this.responseFail }
                                getProfile={true}
                            />
                            <NaverLogin className="naver"
                                clientId="ZD_mMCDSav5Vzl_dMqxM"
                                callbackUrl="http://localhost:3000/login"
                                render={(props) => <button onClick={props.onClick} className="naver">네이버 아이디로 가입하기</button>}
                                onSuccess={ this.naverRegSuccess }
                                onFailure={ this.naverFailure }
                            />
                            {/* <button class="naver" id="naverIdLogin" onClick={this.naverLogin}>네이버 아이디로 가입하기</button> */}
                        </div>
                        <div class="or_join">
                            <span>
                                <span>또는</span>
                            </span>
                        </div>
                        <div class="join_email">
                            <input type="submit" class="email_btn" value="이메일로 가입하기"/>
                        </div>
                        <div class="join_email_detail join_detail_hid">
                            <label>이름</label>
                            <input type="text" id="join_name" name="u_username" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="사용하실 이름을 입력하세요."/>
                            <label>이메일 주소</label>
                            <input type="text" id="join_email" name="u_id"  onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="이메일 주소를 입력해주세요."  />
                            <input type="text" id="join_email_c" name="u_idConfirm"  onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="이메일 주소를 확인합니다."/>
                            <label>비밀번호</label>
                            <input type="password" id="join_pw" name="u_password" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="비밀번호를 입력해주세요."/>
                            <input type="password" id="join_pw_c" name="u_passwordConfirm" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="비밀번호를 확인합니다."/>
                            <div>{ this.props.error && <ErrorMessage>{ this.props.error }</ErrorMessage> }</div>
                            <button type="submit" id="join_next" onClick={ this.props.onSubmit }>다음</button>
                        </div>
                        <div class="go_login">
                            <p>이미 계정이 있으신가요?</p>
                            <Link to="/login">기존 계정으로 로그인하기</Link>
                        </div>
                    </div>
                    {/* <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script> */}
                </div>
            )}
            </>
        );
    }
};
export default AuthForm;



// const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
//     $('.email_btn').on("click", function() {
//         $('.join_email').css('display', 'none');
//         $('.join_email_detail').css('display', 'block');
//     });

//     return(
//         <>
//         { type === 'login' && (
//             console.log(form),
//             <div className="login">
//                 <div class="login_area">
//                     <div class="login_sns">
//                         <button className="kakao">카카오 아이디로 로그인</button>
//                         <button className="naver">네이버 아이디로 로그인</button>
//                     </div>
//                     <div class="or_login">
//                         <span>
//                             <span>또는</span>
//                         </span>
//                     </div>
//                     <form class="login_email" onSubmit={ onSubmit } onChange={ onChange }>
//                         <input type="text" name="u_id"  class="login_e text" placeholder="이메일 주소 입력" />
//                         <input type="password" name="u_password" class="login_e text"  placeholder="비밀번호 입력"/>
//                         <button class="login_e btn">로그인</button>
//                     </form>
//                     <div>{ error && <ErrorMessage>{ error }</ErrorMessage> }</div>
//                     <div class="goto_join">
//                         <Link to="/join">아직 계정이 없으신가요? <span>스폰지 가입하기</span></Link>
//                     </div>
//                     <div class="find_pw">
//                         <a href="https://www.naver.com/">혹시 비밀번호를 잊으셨나요?</a>
//                     </div>
//                 </div>
//             </div>
//         )}
//         { type === 'join' && (
//             console.log(form),
//             <div class="join">
//                 <div class="join_area">
//                     <div class="join_sns">
//                         <button className="kakao">카카오 아이디로 가입하기</button>
//                         <button className="naver">네이버 아이디로 가입하기</button>
//                     </div>
//                     <div class="or_join">
//                         <span>
//                             <span>또는</span>
//                         </span>
//                     </div>
//                     <div class="join_email">
//                         <input type="submit" class="email_btn" value="이메일로 가입하기"/>
//                     </div>
//                     <div class="join_email_detail join_detail_hid">
//                         <label>이름</label>
//                         <input type="text" id="join_name" name="u_username" onChange={ onChange } onSubmit={ onSubmit } placeholder="사용하실 이름을 입력하세요."/>
//                         <label>이메일 주소</label>
//                         <input type="text" id="join_email" name="u_id"  onChange={ onChange } onSubmit={ onSubmit } placeholder="이메일 주소를 입력해주세요."  />
//                         <input type="text" id="join_email_c" name="u_idConfirm"  onChange={ onChange } onSubmit={ onSubmit } placeholder="이메일 주소를 확인합니다."/>
//                         <label>비밀번호</label>
//                         <input type="password" id="join_pw" name="u_password" onChange={ onChange } onSubmit={ onSubmit } placeholder="비밀번호를 입력해주세요."/>
//                         <input type="password" id="join_pw_c" name="u_passwordConfirm" onChange={ onChange } onSubmit={ onSubmit } placeholder="비밀번호를 확인합니다."/>
//                         <div>{ error && <ErrorMessage>{ error }</ErrorMessage> }</div>
//                         <button type="submit" id="join_next" onClick={ onSubmit }>다음</button>
//                     </div>
//                     <div class="go_login">
//                         <p>이미 계정이 있으신가요?</p>
//                         <Link to="/login">기존 계정으로 로그인하기</Link>
//                     </div>
//                 </div>
//             </div>
//         )}
//         </>
//     );
// }
// export default AuthForm;




// // export default class ProjectDetailForm extends Component {
// //     componentDidMount = () => {
// //         $('.email_btn').on("click", function() {
// //             $('.join_email').css('display', 'none');
// //             $('.join_email_detail').css('display', 'block');
// //         });
// //     }
// //     
// //     render() {
// //         console.log(this.state);
// //         return(
// //             <>
// //             { this.props.type === 'login' && (
// //                 console.log(this.props.form),
// //                 <div className="login">
// //                     <div class="login_area">
// //                         <div class="login_sns">
// //                             <button class="kakao">카카오 아이디로 로그인</button>
// //                             <button class="naver">네이버 아이디로 로그인</button>
// //                         </div>
// //                         <div class="or_login">
// //                             <span>
// //                                 <span>또는</span>
// //                             </span>
// //                         </div>
// //                         <form class="login_email" onSubmit={ this.props.onSubmit } onChange={ this.props.onChange }>
// //                             <input type="text" name="u_id"  class="login_e text" placeholder="이메일 주소 입력" />
// //                             <input type="password" name="u_password" class="login_e text"  placeholder="비밀번호 입력"/>
// //                             <button class="login_e btn">로그인</button>
// //                         </form>
// //                         <div>{ this.props.error && <ErrorMessage>{ this.props.error }</ErrorMessage> }</div>
// //                         <div class="goto_join">
// //                             <Link to="/join">아직 계정이 없으신가요? <span>스폰지 가입하기</span></Link>
// //                         </div>
// //                         <div class="find_pw">
// //                             <a href="https://www.naver.com/">혹시 비밀번호를 잊으셨나요?</a>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //             { this.props.type === 'join' && (
// //                 console.log(this.props.form),
// //                 <div class="join">
// //                     <div class="join_area">
// //                         <div class="join_sns">
// //                             <KakaoButton className="kakao"
// //                                 jsKey={"715629828dc999aa81a78ea88130003c"}
// //                                 buttonText="카카오 아이디로 가입하기"
// //                                 onSuccess={this.responseKaKao}
// //                                 // onFailure={(res) => console.log(res)}
// //                                 getProfile={true}
// //                             />
// //                             <button href="https://www.naver.com/" class="naver">네이버 아이디로 가입하기</button>
// //                         </div>
// //                         <div class="or_join">
// //                             <span>
// //                                 <span>또는</span>
// //                             </span>
// //                         </div>
// //                         <div class="join_email">
// //                             <input type="submit" class="email_btn" value="이메일로 가입하기"/>
// //                         </div>
// //                         <div class="join_email_detail join_detail_hid">
// //                             <label>이름</label>
// //                             <input type="text" id="join_name" name="u_username" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="사용하실 이름을 입력하세요."/>
// //                             <label>이메일 주소</label>
// //                             <input type="text" id="join_email" name="u_id"  onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="이메일 주소를 입력해주세요."  />
// //                             <input type="text" id="join_email_c" name="u_idConfirm"  onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="이메일 주소를 확인합니다."/>
// //                             <label>비밀번호</label>
// //                             <input type="password" id="join_pw" name="u_password" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="비밀번호를 입력해주세요."/>
// //                             <input type="password" id="join_pw_c" name="u_passwordConfirm" onChange={ this.props.onChange } onSubmit={ this.props.onSubmit } placeholder="비밀번호를 확인합니다."/>
// //                             <div>{ this.props.error && <ErrorMessage>{ this.props.error }</ErrorMessage> }</div>
// //                             <button type="submit" id="join_next" onClick={ this.props.onSubmit }>다음</button>
// //                         </div>
// //                         <div class="go_login">
// //                             <p>이미 계정이 있으신가요?</p>
// //                             <Link to="/login">기존 계정으로 로그인하기</Link>
// //                         </div>
// //                     </div>
// //                     <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
// //                 </div>
// //             )}
// //             </>
// //         );
// //     }
// // }