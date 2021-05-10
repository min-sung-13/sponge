import React, {useEffect} from 'react';
import CheckButton from '../../common/CheckButton'
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {checkPick} from '../../modules/pickButton';
import {checkNoPick} from '../../modules/pickNoButton';

const PacPickActionButtonContainer = ({history, lesson}) => {
    const dispatch=useDispatch();
    const {  p_pick,
            p_pick2, 
       
            lessonError
        } = useSelector(({pickButton, pickNoButton}) => ({
            p_pick: pickButton.p_pick,
            p_pick2 
            : pickNoButton.p_pick
  
    }));





    
    const onCancle = () => {
        dispatch(
            checkNoPick({
                p_pick2,
            
                lesson,
            })
            )
            console.log("p_pick2 : " + p_pick2 )
    };
    const onAgree = () => {
        dispatch(
            checkPick({
                p_pick,
    
                lesson,
            })
        )
    };





        console.log("p_pick : " + p_pick )
    useEffect(()=> {
        if(lesson){
           
            history.push('/class');
        }
        if(lessonError){
     
        }
    },[history, lesson, lessonError]);


    return <CheckButton onAgree={onAgree} onCancle={onCancle} />

}

export default withRouter(PacPickActionButtonContainer);