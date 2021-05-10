import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { changeField, initializeForm, makeadvm } from '../../modules/makeAdv';
import MakeAdvForm from '../../components/advertisement/MakeAdvForm';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const MakeAdvContainer = ({ history }) => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const dispatch = useDispatch();
    const { form, makeAdv, regAdvError, user } = useSelector(({ makeAdv, user }) => ({
        form: makeAdv.makeAd,
        makeAdv: makeAdv.makeAdv,
        regAdvError: makeAdv.regAdvError,
        user: user.user
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'makeAd',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log("makeAdv_onSubmit 진입");
        const { a_title, a_title2, a_content, a_color, a_allow } = form;
        var { a_enddate, a_price, a_startdate } = form;
        // if([ a_title, a_title2, a_content, a_color].includes('')) {
        //     setError('모든 항목에 응답이 필요합니다.');
        //     return;
        // }
        a_startdate = new Date(a_startdate);
        console.log(a_enddate)
        var end;
        var end2;
        if(a_enddate === "20") {
            end = new Date(new Date(a_startdate).getFullYear(), (new Date(a_startdate).getMonth()), (new Date(a_startdate).getDate() + 20)) + "";
            console.log(end);
            // end2 = end.getFullYear() + '-' + (end2.getMonth()+1) +'-' +  end2.getDate();
        }
        else if(a_enddate === "30") {
            end = new Date(new Date(a_startdate).getFullYear(), (new Date(a_startdate).getMonth()), (new Date(a_startdate).getDate() + 30)) + "";
        }
        else {
            end = new Date(new Date(a_startdate).getFullYear(), (new Date(a_startdate).getMonth()), (new Date(a_startdate).getDate() + 60)) + "";
        }
        a_price = parseInt(a_enddate + "0000", Number);

        console.log(end + "");

        dispatch(makeadvm({ a_userid: user.u_id, a_title, a_title2, a_content, a_color, a_startdate, 'a_enddate': end, a_allow : 'D', a_price: a_price, a_img: url }));
    };

    // 이미지 업로드
    const fileSelectHandler = event =>{
        imgbbUploader(event.target.files[0]).then(resp => {
            const url = resp.data.data.url;
            console.log(url)
            setUrl(url);
        })
    };
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
    };

    useEffect(() => {
        dispatch(initializeForm('makeAd'));
    }, [dispatch]);

    useEffect(() => {
        if(regAdvError) {
            console.log('광고 신청 실패');
            setError('광고 신청 실패');
            return;
        }
        if(makeAdv) {
            console.log('광고 신청 성공!');
            console.log(makeAdv);
            alert('광고 신청이 완료되었습니다');
            history.push('/');
        }
    }, [history, makeAdv, regAdvError, dispatch]);


    return (
        <MakeAdvForm 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            fileSelectHandler={fileSelectHandler}
            imgbbUploader={imgbbUploader}
            error={error}
            url={url}
        />
    );
};

export default withRouter(MakeAdvContainer);