import React, {useEffect} from 'react';
import EditButton from '../../common/EditButton'
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {editNotice} from '../../modules/noticeEdit'

const EditContainerButton = ({history, notice}) => {
    const dispatch=useDispatch();
    const { n_title, 
            n_content, 
            n_cateCode,  
            noticeError, 
            n_like, 
            n_image,
        } = useSelector(({noticeEdit}) => ({
            n_title: noticeEdit.n_title, 
            n_content: noticeEdit.n_content, 
            n_cateCode: noticeEdit.n_cateCode,
            n_image: noticeEdit.n_image,
            noticeError: noticeEdit.noticeError
        }));
    
    console.log('write 진입')

    const onEdit = () => {
        dispatch( editNotice({
            n_title, 
            n_content, 
            n_cateCode,  
            noticeError, 
            n_like, 
            n_image,
            notice,
        }))
    };
    console.log("n_title : " + n_title);
    console.log("n_content : " + n_content);
    console.log("n_cateCode :" +n_cateCode);

    useEffect(()=> {
        if(notice){
            history.push('/notice');
        }
        if(noticeError){
            console.log("error : " + noticeError);
        }
    }, [history, notice, noticeError]);

    return <EditButton onEdit={onEdit} />
}

export default withRouter(EditContainerButton);