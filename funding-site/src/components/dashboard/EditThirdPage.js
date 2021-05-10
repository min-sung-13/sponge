import React, { useEffect, useState } from 'react';
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

    const save = e =>{ settingPage3({video, story}); }

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
                <div   className="click_div">
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
                <div className="content_div99">
                    <div className="input_title">프로젝트 소개 영상</div>
                    <div>프로젝트를 설명해주는 소개영상 url을 입력해주세요</div>
                    <input type="text" placeholder="소개영상 url을 입력해주세요"  className="content_div99_inputText" value={video} onChange={changeVideo}/>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>

            <div className="big_title">프로젝트 스토리</div>
            <div className="input_area99">
                <div   className="click_div">
                    <div className="input_title">프로젝트 스토리</div>
                    <div>
                        <FaRegHandPointRight style={{marginRight: "3px"}}/>
                        프로젝트 스토리를 입력해주세요
                    </div>
                    <div><BsPencilSquare style={{marginRight: "3px"}}/>입력하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">이메일 주소</div>
                    <div>창작자님이 연락받으실 수 있는 이메일을 입력해 주세요. 프로젝트 관련 중요 안내사항이 모두 이메일로 전달되므로 평소 자주 확인하는 이메일을 입력하시는 것이 좋습니다.</div>
                    <CKEditor
                        editor={ ClassicEditor}
                        data={story}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
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
                    />
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "3px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;
