import React, {useEffect} from 'react';
import RemoveButton from '../../common/RemoveButton'
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {removeNotice} from '../../modules/remove';


const NoticeRemoveButtonContainer = ({ history, notice, key}) => {
    const dispatch=useDispatch();
    const { n_title, n_content, n_cateCode, noticeError, n_like, n_image } = useSelector(({remove}) => ({
        n_title: remove.n_title,
        n_content: remove.n_content,
        n_cateCode: remove.n_cateCode,
        n_like: remove.n_like,
        n_image: remove.n_image,
        notice: remove.notice,
        noticeError : remove.noticeError
    }));


    const onRemove = () => {
        dispatch(
            removeNotice({
                notice,
                n_title,
                n_content,
                n_cateCode,
                noticeError,
                n_like,
                n_image
            })
        )  
    }

    console.log("공지 주소:" + notice._id);

    useEffect(() => {
        if(notice){
            history.push('/notice')
        }
        if(noticeError){
            console.log(noticeError);
        }
    }, [history, notice, noticeError]);


    return <RemoveButton onRemove={onRemove} />

};

export default withRouter(NoticeRemoveButtonContainer);