import React, { useEffect, useState } from 'react';
import '../../scss/style_class1.css';
import { FaRegHandPointRight} from "react-icons/fa";
import {BsPencilSquare } from "react-icons/bs";
import {GoCheck} from 'react-icons/go';
import axios from 'axios';

const EditFirstPage = ({onSubmit, settingPage1, data, pac}) => {
    // console.log(pac);
    
    const {p_title, p_img , p_explain, p_cate, p_addr, p_tag2, m_profile, m_name, m_intro} = data;

    const [title, setTitle] = useState(p_title);
    const [img, setImg] = useState(p_img);
    const [explain, setExplain] = useState(p_explain);
    const [cate, setCate] = useState(p_cate);
    const [addr, setAddr] = useState(p_addr);
    const [tag, setTag] = useState(p_tag2);

    const [mimg, setMimg] = useState(m_profile);
    const [mname, setMname] = useState(m_name);
    const [mintro, setMintro] = useState(m_intro);

    const onSubTitle = e =>{
        onSubmit(title);
        settingPage1({title, img, explain, cate, addr, tag, mimg, mname, mintro});
    }
    const save = e =>{ settingPage1({title, img, explain, cate, addr, tag, mimg, mname, mintro}); }

    const titleChange = e => {setTitle(e.target.value);}
    const imgChange = event => {
        imgbbUploader(event.target.files[0]).then(resp => {
            console.log(resp.data.data.url);
            setImg(resp.data.data.url);
        })
    }
    const explainChange = e => { setExplain(e.target.value);}
    const cateChange = e => {setCate(e.target.value);}
    const addrChange = e => {setAddr(e.target.value);}
    const tagChange = e => {
        setTag(e.target.value);
    }
    const mimgChange = event => {
        imgbbUploader(event.target.files[0]).then(resp => {
            console.log(resp.data.data.url)
            console.log(resp.data.data)
            setMimg(resp.data.data.url);
        })
    }
    const mnameChange = e => {setMname(e.target.value);}
    const mintroChange = e => {setMintro(e.target.value);}

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

    const onClick = e =>{
        
    }

    useEffect(()=> {
        console.log('update!');
    },[title, img, explain, cate, addr, tag, mimg, mname, mintro])

    return(
        <div className="first_zone">
            <div className="big_title">프로젝트 개요</div>
            <div className="input_area99">
                <div className="click_div" onClick={onClick}>
                    <div className="input_title">프로젝트 제목</div>
                        {title === '' ? 
                            <div>
                                < FaRegHandPointRight style={{marginRight: "5px"}} />프로젝트 제목을 입력해주세요
                            </div>
                        : 
                            <div className="saveText">
                                {title}
                            </div>
                        }
                        
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    title === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 제목</div>
                    <div>프로젝트에 멋진 제목을 붙여주세요. 감정에 호소하는 제목보다는 만드시려는 창작물, 작품명, 혹은 프로젝트의 주제가 드러나게 써주시는 것이 좋습니다.</div>
                    <input type="text" placeholder="프로젝트 제목을 입력해주세요"  className="content_div99_inputText" onChange={titleChange} value={title}/>
                    <button  className="content_div99_button" onClick={onSubTitle}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div className="click_div" onClick={onClick}>
                    <div className="input_title">프로젝트 대표 이미지</div>
                        {img === '' ? 
                            <div>
                            < FaRegHandPointRight style={{marginRight: "5px"}}/>
                            프로젝트 대표 이미지를 등록해주세요
                            </div>
                        : 
                            <div className="miribogi_img1"><img src={img}/></div>
                        }
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    img === '' ? '업로드' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 대표 이미지</div>
                    <div>대표 이미지는 프로젝트의 가장 중요한 시각적 요소입니다.<br/>
                        후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있게 하기 위해 다음 가이드라인에 따라 디자인해 주세요
                    </div>
                    <div className="miribogi_img1">{img !== '' ? <img src={img}/> : <span></span>}</div>
                    <input type="file" onChange={imgChange} />
                    <button  className="content_div99_button"  onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">프로젝트 요약</div>
                    {explain === '' ? 
                            <div>
                                < FaRegHandPointRight style={{marginRight: "5px"}}/>프로젝트 요약을 입력해주세요
                            </div>
                        : 
                        <div className="saveText">
                            {explain}
                        </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    explain === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 요약</div>
                    <div>후원자 분들에게 본 프로젝트를 간략하게 소개해 봅시다.</div>
                    <textarea className="content_div99_textarea" onChange={explainChange}></textarea>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">프로젝트 카테고리</div>
                    {cate === '' ? 
                            <div>
                                < FaRegHandPointRight style={{marginRight: "5px"}}/>프로젝트 카테고리을 입력해주세요
                                </div>
                        : 
                            <div className="saveText">
                                {cate}
                            </div>
                    }
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    cate === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 카테고리</div>
                    <div>프로젝트의 성격에 맞는 카테고리를 선택해 주세요.<br/>
                        (프로젝트 성격과 맞지 않는 카테고리를 선택하실 시 후원자가 해당 프로젝트를 찾기 어려워지기에 에디터에 의해 조정될 수 있습니다.)</div>
                        <select className="content_div99_select" onChange={cateChange}>
                            <option>게임</option>
                            <option>공연</option>
                            <option>디자인</option>
                            <option>만화</option>
                            <option>예술</option>
                            <option>공예</option>
                            <option>사진</option>
                            <option>푸드</option>
                            <option>음악</option>
                            <option>출판</option>
                            <option>테크</option>
                            <option>패션</option>
                            <option>뷰티</option>
                        </select>
                    <button  className="content_div99_button" onClick={save} ><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">프로젝트 페이지 주소</div>
                    {addr === '' ? 
                            <div>
                            < FaRegHandPointRight style={{marginRight: "5px"}}/>
                            프로젝트 페이지 주소를 입력해주세요
                            </div>
                        : 
                            <div className="saveText">
                                http://localhost:3000/projectDetail/{addr}
                            </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    addr === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로젝트 페이지 주소</div>
                    <div>프로젝트 페이지로 접속할 수 있는 주소(URL)를 설정해주세요.</div>
                    <span>http://localhost:3000/projectDetail/ </span><input type="text" placeholder="프로젝트 페이지 주소를 입력해주세요"  className="content_div99_inputText" onChange={addrChange}/>
                    <button  className="content_div99_button" onClick={save} ><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}}/>저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">검색용 태그</div>
                    {tag === '' ? 
                            <div>
                                <FaRegHandPointRight style={{marginRight: "5px"}}/>예시:뱃지,웹툰,에코백,고양이,유기견
                            </div>
                        : 
                            <div className="saveText">
                                {tag}
                            </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    tag === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">검색용 태그</div>
                    <div>내외부 검색 엔진에서 프로젝트가 잘 검색될 수 있도록, 사람들이 검색할만한 프로젝트의 핵심 단어를 입력해주세요.<br/>
                        여러 개의 태그를 입력하시는 경우 쉼표(,)로 구분하여 작성하실 수 있습니다.<br/>
                        프로젝트와 관련 없거나 검색에 불리한 키워드는 운영진에 의해 조정될 수 있습니다.<br/>
                        쉼표를 제외한 특수문자는 입력하실 수 없습니다.</div>
                    <input type="text" placeholder="검색용 태글을 입력해주세요"  className="content_div99_inputText_width" onChange={tagChange}/>
                    <div className="black_text">※ 쉼표를 제외한 특수문자는 입력하실 수 없습니다.</div>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
            <div className="big_title">창작저 정보</div>
            <div className="input_area99">
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">프로필 이미지</div>
                    {mimg === '' ? 
                            <div>
                            <FaRegHandPointRight style={{marginRight: "5px"}}/>
                            창작자님의 프로필 이미지를 올려주세요
                            </div>
                        : 
                            <div className="miribogi_img2">
                             <img src={mimg}/>
                            </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    mimg === '' ? '업로드' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">프로필 이미지</div>
                    <div>창작자님 개인이나 팀의 사진을 올려주세요. 얼굴이 나온 사진을 넣으면 프로젝트의 신뢰성 향상에 도움이 됩니다.</div>
                    <div className="miribogi_img2">{mimg !== '' ? <img src={mimg}/> : <span></span>}</div>
                    <input type="file" onChange={mimgChange}/>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">창작자 이름</div>
                    {mname === '' ? 
                            <div>
                            <FaRegHandPointRight style={{marginRight: "5px"}}/>
                            창작자님의 이름을 입력해주세요
                            </div>
                        : 
                        <div className="saveText">
                            {mname}
                        </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    mname === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">창작자 이름</div>
                    <div>창작자님을 대표할 수 있는 이름을 써 주세요. 팀으로 진행하신다면 팀 이름을 쓰셔도 됩니다</div>
                    <input type="text" placeholder="창작자님의 이름을 입력해주세요"  className="content_div99_inputText" onChange={mnameChange}/>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
                <div   className="click_div" onClick={onClick}>
                    <div className="input_title">창작자 소개</div>
                    {mintro === '' ? 
                            <div>
                                <FaRegHandPointRight style={{marginRight: "5px"}}/>창작자님의 소개를 입력해주세요
                            </div>
                        : 
                            <div className="saveText">
                                {mintro}
                            </div>
                    }
                    
                    <div><BsPencilSquare style={{marginRight: "5px"}}/>{
                    mintro === '' ? '입력' : '수정'
                    }하기</div>
                    <div className="clearBoth"></div>
                </div>
                <div className="content_div99">
                    <div className="input_title">창작자 소개</div>
                    <div>창작자님의 이력과 간단한 소개를 써 주세요.</div>
                    <textarea className="content_div99_textarea" onChange={mintroChange}></textarea>
                    <button  className="content_div99_button" onClick={save}><GoCheck size="15" style={{marginRight: "5px", verticalAlign: "top"}} />저장하기</button>
                    <div className="clearBoth"></div>
                </div>
            </div>
        </div>
    );
};

export default EditFirstPage;
