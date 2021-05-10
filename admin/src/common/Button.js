import React from 'react';

const Button = ({onCancel, onPublish }) => {
    return (
        <div className="notice_btn">
            <input type="button" value={"등록"} onClick={onPublish} className="btn_submit-1"  />
            <input type="button" value={"닫기"} onClick={onCancel} className="btn_cancle-1" />
        </div>     
    )
};

export default Button;
