import React from 'react';
import '../../scss/style_class1.css';

const MakeAdvForm = ({ form, onChange, onSubmit, fileSelectHandler, error, url }) => {
    return (
        console.log(form),
        <div id="wrap">
            <div className="adv inner_box">
                <div className="ad_title_box">
                    <h2>광고 신청</h2>
                </div>
                <div className="ad_form">
                    <p><label>광고 타이틀</label> <input type="text" placeholder="광고 제목(1)을 입력하세요." name="a_title" onChange={onChange} onSubmit={onSubmit} /></p>
                    <p><label>광고 타이틀</label> <input type="text" placeholder="광고 제목(2)을 입력하세요." name="a_title2" onChange={onChange} onSubmit={onSubmit} /></p>
                    <p><label>한줄 설명</label> <input type="text" placeholder="광고 설명을 입력하세요." name="a_content" onChange={onChange} onSubmit={onSubmit} /></p>
                    <p><label>테마 색상 코드</label> <input type="text" placeholder="테마 색상을 입력해주세요(16진수 컬러코드)" name="a_color" onChange={onChange} onSubmit={onSubmit} /></p>
                    <p>
                        <label>메인 이미지</label>
                        <div className="adv_img"><img src={url} /></div>
                        <input type="file" name="a_img" onChange={fileSelectHandler}  />
                    </p>
                    <p><label>시작일 선택</label> <input type="date" className="adv_startdate" name="a_startdate" onChange={onChange} onSubmit={onSubmit} /></p>
                    <p><label>마감일 선택</label></p>
                    <div>
                        <label><input type="radio" value="20" name="a_enddate" onChange={onChange} onSubmit={onSubmit} />20일 게시</label>
                        <label><input type="radio" value="30" name="a_enddate" onChange={onChange} onSubmit={onSubmit} />30일 게시</label>
                        <label><input type="radio" value="60" name="a_enddate" onChange={onChange} onSubmit={onSubmit} />60일 게시</label>
                    </div>
                    <p><button className="ad_submit" onClick={onSubmit}>광고 신청</button></p>
                </div>
            </div>
        </div>
    );
};

export default MakeAdvForm;