import React from 'react';

const EditButton =({ onEdit }) => {
    return(
        <div className="notice_btn">
            <input type="button" value={"수정"} className="btn_submit" onClick={onEdit}/>
            <input type="button" value={"닫기"} className="btn_cancle"/>
        </div>           
    )
}

export default EditButton;