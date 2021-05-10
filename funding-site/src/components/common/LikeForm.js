import React, { useEffect } from 'react';
import '../../scss/mingcss.css';
import l1 from '../../image/like1.png';
import l2 from '../../image/like2.png';
import { useDispatch, useSelector } from 'react-redux';
import { addLas, deleteLas , listLas } from '../../modules/las';

const LikeForm = ({ history, user, pac}) => {

    var mylike;

    const dispatch = useDispatch();

    const ls_productcode = pac._id;
    var ls_myid;
    if(user) {
        ls_myid = user.u_id;
    } else{
        ls_myid='';
    }
    const ls_type = "like";

    const { las } = useSelector(
        ({ las }) => ({
            las: las.las
        })
    );

    if(user){
        if(las){
            mylike = las;
            // console.log('mylike : ' + JSON.stringify(mylike))
            if(mylike.length >= 1){
                mylike = mylike.filter(l => l.ls_myid === ls_myid);
                mylike = mylike.filter(l => l.ls_type === ls_type);
                mylike = mylike.filter(l => l.ls_productcode === ls_productcode);
            }
            // console.log('filter : ' + mylike.length);
        }
    }

    const changeImg = e => {
        if(!user){
            history.push('/login');
        }else{
            var empty = '';
            if(e.target.src === l1) {
                dispatch(
                    addLas({ls_type, ls_myid, ls_productcode, empty})
                )
                dispatch(
                    listLas()
                )
                e.target.src = l2;
                mylike = null;
            }else {
                dispatch(
                    deleteLas({ls_type, ls_myid, ls_productcode})
                )
                dispatch(
                    listLas()
                )
                e.target.src = l1;
            }
        }
    }

    useEffect(()=>{
        dispatch(
            listLas()
        );
    },[])

    if(las) {
        return (
            <>
                <div className="heart_img">
                    { user ?
                        mylike.length > 0 ?
                        <img alt="이미지" src={l2} onClick={changeImg} />
                        :
                        <img alt="이미지" src={l1} onClick={changeImg} />    
                        :
                        <img alt="이미지" src={l1} onClick={changeImg} />
                    }
                </div>
            </>
        )
    }else {
        return(
            <div></div>
        )
    }
};

export default LikeForm;