import React from 'react';



const RemoveButton = ({ onRemove }) => {
    return (
            <form>
                <input type="submit" value="삭제" className="cn_ques_bt" onClick={onRemove}/>
            </form>  
    )
};

export default RemoveButton;
