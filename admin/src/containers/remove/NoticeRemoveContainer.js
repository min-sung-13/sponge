import React, {useEffect} from 'react';

import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


import {removeNotice} from '../../modules/remove';


const NoticeRemoveContainer = ({match}) => {
     const dispatch = useDispatch();
     const {notice} = match.params;

    useEffect(() => {
      console.log("*******************notice_id : " + notice);
        dispatch(removeNotice(notice));
    }, [dispatch, notice]);
    console.log(notice+"리무브 콘테이너")
    return (
        <div>
          <div>얍</div>
        </div>
    );
    
}

export default withRouter(NoticeRemoveContainer);