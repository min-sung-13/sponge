import React, {useCallback, useEffect, useState} from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import $ from 'jquery';
import NoticeRemoveButtonContainer from '../../../containers/remove/NoticeRemoveButtonContainer'
import EditContainerButton from'../../../containers/notices/EditContainerButton';
import {useSelector, useDispatch} from 'react-redux';
import {changeField} from'../../../modules/noticeEdit';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import jQuery from 'jquery';


window.$ = jQuery;
window.jQuery = jQuery;


jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}

$(function(){
  $(".btn_cancle").on("click", function(){
      $(".noti_replace").css({"display":"none"});
  });
})

$(function(){
  $(".btn_notice").on("click", function(){
    $(".noti-write").show();
    $(".noti-write").center();
  });
});

$(function(){
  $(".btn_submit").on("click", function(){
    $(".noti_replace").show();
    $(".noti_replace").center();
      window.location.reload();
  });
})


$(function(){
  $(".btn_cancle-1").on("click", function(){
    $(".noti-write").css({"display":"none"});
  });
})

$(function(){
  $(".btn_submit-1").on("click", function(){
    $(".noti-write").css({"display":"none"});
    window.location.reload();
  });
});

$(function(){      
  window.$(".quesBt").on("click", function(){
    window.$(this).parent().parent().siblings(".noti_replace").show();
    window.$(".noti_replace").center();
  });
})



const NoticeItem =({ notice, key }) => {

  const {n_title, n_cateCode, n_date, n_content, n_image } = notice;
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
    console.log(notice);
    onChangeField({key: 'n_content', value: content});
  },[content])

  const fileSelectHandler = e =>{
    onChangeField({key: 'n_image', value: e.target.value});
    imgbbUploader(e.target.files[0]).then(resp => {
      console.log(resp.data.data.url)
    });
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
    });
  }

  const fieUploadHandler = () => {
      
  }

  return(
    <>
    <tbody>
      <tr>
        <td>
          <a href="#" className="quesBt">
            {n_title}
          </a>
        </td>
        <td>
          <Moment format="YYYY/MM/DD">
            {n_date}
          </Moment>  
        </td>
        <td>
          {n_cateCode}
        </td>
        <td className="text-r">
          <NoticeRemoveButtonContainer notice={notice} key={notice._id}/>
        </td>
      </tr>
      <div className="noti_replace">
        <div className="pop_total2">
          <div className="pop_top_total">
            <div className="pop_profile_info">
                <p className="noti_pro_info_name">????????????(??????)</p>
            </div>
          </div>
          <div>
            <p>
              ?????? : <input type="text" className="noti_title" name="notiTitle" defaultValue={n_title} onChange={onChangeTitle}/>
            </p>
            <p>
              ?????? : 
              <select name="noti_select" className="notiSelect" onChange={onChangeCate}>
                <option defaultValue={n_cateCode}>{n_cateCode}</option>
                <option value={"??????"}>??????</option>
                <option value={"????????? ?????????"}>????????? ?????????</option>
                <option value={"????????? ??????"}>????????? ??????</option>
                <option value={"????????????"}>????????????</option>
              </select>
            </p>
          </div>
          <div style={{'width':'97%'}}  >
            <CKEditor
              className="cke"
              editor={ClassicEditor}
              data={n_content}
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
              } }
              onChange={ (event, editor) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                console.log("data : " + data);
                setContent(data);
              } }
              onBlur={ (event, editor) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ (event, editor) => {
                  console.log( 'Focus.', editor );
              } }
              style={{'height':'97%', 'resize': 'both'}}
            />
          </div>
          <div>
            <input type="file"  onChange={fileSelectHandler} />
          </div>
        </div>
        <EditContainerButton notice={notice} key={notice._id} />
      </div>
    </tbody> 
    </>
  );
}



const NoticeList = ({notices, error, loading}) => {


if(error) {
  return <p>??????????????????</p>
}
return(
  <div className="card-body">
        
  {!loading && notices && (
      <div className="table-responsive">
          <table className="table">
        <thead className=" text-primary">
    <tr>
      <th>
        ??????
      </th>
      <th>
        ?????????
      </th>
      <th>
        ??????
      </th>
      <th className="text-r">
        ??????
      </th>
    </tr>
  </thead>
  {notices.map(notice => (
      <NoticeItem notice={notice} key={notice._id} />
  ))}
  </table>  
  </div>
  )}
  </div>


  );


}

export default NoticeList;