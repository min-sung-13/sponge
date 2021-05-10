import React from 'react';
import '../../scss/style_class1.css';
import { withRouter } from 'react-router-dom';
import profileImg from '../../image/profile3.png';
import styled from 'styled-components';

const Mpedit = ({fileSelectHandler, user, onChange, onSubmit, error, url}) => {

    
    const ErrorMessage = styled.div`
    color: #B322F8;
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    `;

    console.log('들어오긴함');
    return(
        <>
            <div class="edit_info_zone">
                <div class="userinfo">
                    <h3>회원정보 수정</h3>
                    <div className="edit_info">
                        { user ? 
                            <p><label>아이디 <input type="text" value={ user.u_id } readOnly className="cantedit" name="u_id"  onSubmit={onSubmit} onChange={onChange} /></label></p> : <p><label>아이디 <input type="text" readonly className="cantedit" name="u_id" /></label></p> 
                        }
                        <p>
                            <label>비밀번호<input type="password" name="u_password" onSubmit={onSubmit} onChange={onChange} /></label>
                        </p>
                        <p>
                            <label>비밀번호 확인<input type="password" name="u_password_confirm" onSubmit={onSubmit} onChange={onChange} /></label>
                        </p>
                        <div>{ error && <ErrorMessage>{ error }</ErrorMessage> }</div>
                        { user ? 
                            <p><label>이름<input type="text" name="u_username" value={ user.username } className="cantedit" onSubmit={onSubmit} onChange={onChange} readOnly /></label></p> : <p><label>이름<input type="text" name="u_username" className="cantedit" /></label></p> 
                        }    
                    </div>
                    <div className="edit_profile">
                        <p>
                            <label>프로필 사진
                                <div className="edit_photo">
                                    <img className="profile_cover" src={ user ? (onChange ? url : url) : profileImg } onChange={onChange}/>
                                </div>
                                <input type="file" name="u_profile" onChange={fileSelectHandler} />
                            </label>
                        </p>
                    </div>
                    <p className="editOk_btn"><button onClick={onSubmit}>수정</button></p>
                </div>
            </div> 
        </>
    );
};

export default withRouter(Mpedit);
