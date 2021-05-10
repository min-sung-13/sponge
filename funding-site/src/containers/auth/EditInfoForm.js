import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch }  from 'react-redux';
import { changeField, initializeForm, updateOk } from '../../modules/update';
import { logout } from '../../modules/user';
import MyPageForm from '../../components/mypage/MyPageForm';
import { withRouter } from 'react-router-dom';
import { listPoint } from '../../modules/point';
import { listLas } from '../../modules/las';
import { listPacs } from '../../modules/pacs';
import { listRes } from '../../modules/res';
// import { check } from '../../modules/user';

const EditInfoForm = ({ history }) => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const dispatch = useDispatch();
    const { form, update, updateError, user, point, las, pacs, res } = useSelector(({ update, point, las, pacs, res }) => ({
        form: update.edit,
        update: update.update,
        point: point.point,
        las: las.las,
        pacs: pacs.pacs,
        res: res.res,
        updateError: update.updateError,
        // user: user.user
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'edit',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log("Edit_onSubmit 진입");
        const { u_password, u_password_confirm } = form;
        if([ u_password, u_password_confirm ].includes('')) {
            setError('빈 칸을 모두 입력해주세요.');
            return;
        }
        if(u_password !== u_password_confirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form: 'edit', key: 'u_password', value: ''}));
            dispatch(changeField({form: 'edit', key: 'u_password_confirm', value: ''}));
            return;
        }
        dispatch(updateOk({ u_password, u_profile: url }));
        if(updateError) {
            console.log('정보 수정 실패');
            setError('정보 수정 실패');
            return;
        }
        if(update) {
            console.log('정보 수정 성공!');
            console.log(update);
            alert('정보 수정이 완료되었습니다. 다시 로그인 해 주세요.');
            dispatch(logout());
            history.push('/');
        }
    };

    const fileSelectHandler = event =>{
        imgbbUploader(event.target.files[0]).then(resp => {
            const url = resp.data.data.url;
            console.log(url)
            setUrl(url);
        })
    }

    const imgbbUploader = ( img ) => {
        let body = new FormData()
        body.set('key', 'fc932c3718be04e605f6d38678fc9533')
        body.append('image', img)
    
        return axios({
            url: 'https://api.imgbb.com/1/upload',
            method: 'post',
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: body
        })
    }
    useEffect(()=> {
        dispatch(listPoint());
        dispatch(listLas());
        dispatch(listPacs());
        dispatch(listRes());
    },[dispatch])

    useEffect(() => {
        dispatch(initializeForm('edit'));
    }, [dispatch]);

    return (
        <MyPageForm 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            fileSelectHandler={fileSelectHandler}
            imgbbUploader={imgbbUploader}
            error={error}
            url={url}
            point={point}
            las={las}
            pac={pacs}
            res={res}
        />
    );
};

export default withRouter(EditInfoForm);