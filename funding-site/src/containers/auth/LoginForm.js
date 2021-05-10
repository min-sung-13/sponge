import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { changeField, initializeForm, loginOk, kakaoLoginOk, naverLoginOk } from '../../modules/login';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
    const [error, setError ] = useState(null);
    const dispatch = useDispatch();
    const { form, login, loginError, user } = useSelector(({ login, user }) => ({
        form: login.loginG,
        login: login.login,
        loginError: login.loginError,
        user: user.user
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'loginG',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log("login_onsubmit 진입");
        const { u_id, u_password } = form;
        if([u_id, u_password].includes('')){
            setError('빈 칸을 모두 입력해주세요.');
            return;
        }
        dispatch(loginOk({ u_id, u_password }));
    };
    // 카카오 로그인
    const kakaoLogin = ({kakaoLoginUser}) => {
        console.log("kakoLogin 호출");
        console.log({kakaoLoginUser});

        const u_id = kakaoLoginUser.u_id;
        console.log(u_id);
    
        dispatch(kakaoLoginOk({u_id}));
        alert('로그인이 완료되었습니다☜(ﾟヮﾟ☜)');
        history.push('/login');
    };

    const naverLogin = ({naverLoginUser}) => {
        console.log("naverLogin 호출");
        console.log({naverLoginUser});

        const u_id = naverLoginUser.u_id;
        console.log(u_id);
    
        dispatch(naverLoginOk({u_id}));
        alert('로그인이 완료되었습니다☜(ﾟヮﾟ☜)');
        history.push('/login');
    };

    useEffect(() => {
        dispatch(initializeForm('loginG'));
    }, [dispatch]);

    useEffect(() => {
        if(loginError){
            if(loginError.response.status === 401){
                setError('이메일 혹은 비밀번호가 맞지 않습니다 :(');
                return;
            }
            setError('이메일과 비밀번호를 확인하세요 :(');
            return;
        }
        if(login){
            // console.log(login);
            console.log('로그인 성공');
            console.log("okokokok");
            dispatch(check());
            // history.push('/main');
        }
    }, [dispatch, login, loginError, history])

    useEffect(() => {
        if(user){  
            try{
                console.log("user : " + JSON.stringify(user));
                localStorage.setItem('user', JSON.stringify(user));
                alert(`반갑습니다 ${user.username}님!`);
                history.push('/');
            }catch(e){
                console.log('localStorage error');
            }
        }
    }, [history, user]);

    return (
        <AuthForm type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            kakaoLogin={kakaoLogin}
            naverLogin={naverLogin}
        />
    );
};

export default withRouter(LoginForm);