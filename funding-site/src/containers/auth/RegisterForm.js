import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register, kakao_reg, naver_reg } from '../../modules/join';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, join, joinError, user } = useSelector(({ join, user }) => ({
        form: join.register,
        join: join.join,
        joinError: join.joinError,
        user: user.user
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const { u_username, u_id, u_idConfirm, u_password, u_passwordConfirm } = form;

        if([u_username, u_id, u_idConfirm, u_password, u_passwordConfirm].includes('')){
            setError('빈 칸을 모두 입력해주세요.');
            return;
        }
        if(u_id !== u_idConfirm) {
            setError('이메일이 일치하지 않습니다.');
            dispatch(changeField({form: 'register', key:'u_id', value:''}));
            dispatch(changeField({form: 'register', key:'u_idConfirm', value:''}));
            return;
        }

        if(u_password !== u_passwordConfirm){
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form: 'register', key: 'u_password', value:''}));
            dispatch(changeField({form: 'register', key: 'u_passwordConfirm', value:''}));
            return;
        }
        dispatch(register({ u_username, u_id, u_password }));
    };

    // 카카오 회원가입
    const kakaoReg = ({kakaoUser}) => {
        console.log("kakoReg 호출");
        console.log({kakaoUser});

        const u_id = kakaoUser.u_id;
        const u_username = kakaoUser.u_username;
        const u_profile = kakaoUser.u_profile;
    
        dispatch(kakao_reg({ u_id, u_username, u_profile }));
        alert('카카오 계정으로 가입 완료되었습니다 :)');
        history.push('/login');
    };

    // 네이버 회원가입
    const naverReg = ({NaverRegUser}) => {
        console.log("naverReg 호출");
        console.log({NaverRegUser});

        const u_id = NaverRegUser.u_id;
        const u_username = NaverRegUser.u_username;
        const u_profile = NaverRegUser.u_profile;
    
        dispatch(naver_reg({ u_id, u_username, u_profile }));
        alert('네이버 계정으로 가입 완료되었습니다 :)');
        history.push('/login');
    };


    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(joinError){
            if(joinError.response.status === 409){
                setError('이미 존재하는 이메일입니다.');
                return;
            }
            setError('회원가입 실패');
            return;
        }
        if(join){
            console.log('회원가입 성공');
            console.log(join);
            alert('회원가입이 완료되었습니다!');
            history.push('/login');
        }
    }, [history, join, joinError, dispatch]);

    return (
        <AuthForm type="join"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            kakaoReg={kakaoReg}
            naverReg={naverReg}
        />
    );
};

export default withRouter(RegisterForm);