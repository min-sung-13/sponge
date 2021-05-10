import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import WriteActionButtonContainer from '../../../containers/write/WriteActionButtonContainer'
import {changeField} from '../../../modules/write';
import {useSelector, useDispatch} from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({ n_title, n_cateCode, n_content, n_image}) => {

  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    
  const onChangeTitle = e => {
      onChangeField({key: 'n_title', value: e.target.value});
  }

  const onChangeCate = e => {
      onChangeField({key: 'n_cateCode', value: e.target.value});
  }

  const onChangeContent = e => {
      setContent(e.target.value);
  }


  useEffect(()=>{
    console.log(content)
    onChangeField({key: 'n_content', value: content});
  },[content])

  const fileSelectHandler = e =>{
      imgbbUploader(e.target.files[0]).then(resp => {
          console.log(resp.data.data.url)
          onChangeField({key: 'n_image', value: resp.data.data.url});
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
  

  const fieUploadHandler = () => {
        
  }

    return(
        <div className="noti-write">
          <form>
            <div className="pop_total2">
              <div className="pop_top_total">
                <div className="pop_profile_info">
                  <p className="noti_pro_info_name">공지사항</p>
                </div>
              </div>
              <div>
                <p>
                  제목 : 
                  <input type="text" className="noti_title" name="notiTitle" onChange={onChangeTitle} value={n_title} />
                </p>
                <p>
                  구분 : 
                  <select className="noti_select" name="notiSelect" onChange={onChangeCate} value={n_cateCode}>
                    <option value={"선택해주세요"}>선택해주세요</option>
                    <option value={"공지"}>공지</option>
                    <option value={"이벤트 진행중"}>이벤트 진행중</option>
                    <option value={"이벤트 종료"}>이벤트 종료</option>
                    <option value={"보도자료"}>보도자료</option>
                  </select>
                </p>
                <p style={{'width':'97%'}}>
                  <CKEditor
                    value = {n_content}
                    editor = {ClassicEditor}
                    data = {n_content}
                    onReady = { editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange = { (event, editor) => {
                      const data = editor.getData();
                      console.log( { event, editor, data } );
                      console.log("data : " + data);
                      setContent(data);
                    } }
                    onBlur={ (event, editor) => {
                      console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                      console.log( 'Focus.', editor );
                    } }
                  />
                  <p><input type="file" onChange={fileSelectHandler} /></p>
                </p>
              </div>
            </div>
          </form>
          <WriteActionButtonContainer />  
      </div>
    )
};

export default Editor;
