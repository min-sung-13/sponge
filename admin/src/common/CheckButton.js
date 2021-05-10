import React from 'react';

const CheckButton =({onCancle, onAgree}) => {
  return(
      <form action="">
        <input type="submit" value={"수락"} onClick={onAgree} className="btnAgree" name="btnAgree"/>
        <input type="submit" value={"거절"} onClick={onCancle} className="btnCancle" name="btnCancle"/>
      </form>
  )
};

export default CheckButton;