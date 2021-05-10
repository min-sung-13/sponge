import React, { useEffect, useRef, useState } from 'react';
import '../../scss/style_class1.css';
import { FaRegHandPointRight} from "react-icons/fa";
import {BsPencilSquare } from "react-icons/bs";
import {GoCheck} from 'react-icons/go';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactPlayer from 'react-player'

const ThirdPage = ({ settingPage3, data }) => {

    const { p_video, p_story } = data;

    const [video, setVideo] = useState(p_video);
    const [story, setStory] = useState(p_story);

    const r1 = useRef();
    const r2 = useRef();
    const r3 = useRef();
    const r4 = useRef();

    const onClick1 = e =>{
        r1.current.className = 'display_none';
        r2.current.className = 'content_div99';
        r3.current.className = 'click_div';
        r4.current.className = 'display_none';
    }
    const onClick2 = e =>{
        r1.current.className = 'click_div';
        r2.current.className = 'display_none';
        r3.current.className = 'display_none';
        r4.current.className = 'content_div99';
    }
    

    const save = e =>{ 
        r1.current.className = 'click_div';
        r2.current.className = 'display_none';
        r3.current.className = 'click_div';
        r4.current.className = 'display_none';
        settingPage3({video, story}); 
    }

    const changeVideo = e => {
        setVideo(e.target.value);
    }

    useEffect(()=>{
        console.log('update!3');
    },[ video, story])

    return(
        <div className="third_zone">
            <div className="big_title">프로젝트 소개 영상</div>
            <div className="input_area99">
                <div className="click_div" ref={r1} onClick={onClick1}>
                    <div className="input_title">프로젝트 소개 영상<span className="select_div">선택항목</span></div>
                    {video === '' ? 
                             <div>
                             <FaRegHandPointRight style={{marginRight: "3px"}}/>
                             프로젝트 소개 영상을 등록해주세요
                            </div>
                        : 
                        <div>
                             <ReactPlayer url={video} controls/>
                        </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    video === '' ? '등록' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="display_none" ref={r2}>
                    <div className="input_title">프로젝트 소개 영상</div>
                    <div>프로젝트를 설명해주는 소개영상 url을 입력해주세요</div>
                    <input type="text" placeholder="소개영상 url을 입력해주세요"  className="content_div99_inputText" value={video} onChange={changeVideo}/>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>

            <div className="big_title">프로젝트 스토리</div>
            <div className="input_area99">
                <div   className="click_div" ref={r3} onClick={onClick2}>
                    <div className="input_title">프로젝트 스토리</div>
                    <div>
                        <FaRegHandPointRight style={{marginRight: "3px"}}/>
                        프로젝트 스토리를 입력해주세요
                    </div>
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>입력하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="display_none" ref={r4}>
                    <div className="input_title">프로젝트 스토리</div>
                    <div>창작자님의 프로젝트를 자세하게 설명해주세요.</div>
                    <CKEditor
                        editor={ ClassicEditor}
                        data={story}
                        onReady={ editor => {
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            console.log("data : " + data);
                            setStory(data);
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                        config = {{
                          ckfinder: {
                            uploadUrl: 'https://api.imgbb.com/1/upload'
                          }}
                        }
                    />
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;
