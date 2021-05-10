import React, {useEffect} from 'react';
import CheckButton from '../../common/CheckButton'
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {checkLesson} from '../../modules/classButton';
import {checkNoLesson} from '../../modules/classNoButton';

const CheckActionButtonContainer = ({history, lesson}) => {
    const dispatch=useDispatch();
    const {
        p_state,
        p_state2,
        lessonError
    } = useSelector(({checkButton, checkNoButton}) => ({
        p_state: checkButton.p_state,
        p_state2: checkNoButton.p_state
    }));

    const onCancle = () => {
        dispatch(
            checkNoLesson({
                p_state2,
                lesson,
            }));
        console.log("p_stateNo : " + p_state2 )
    };

    const onAgree = () => {
        dispatch(
            checkLesson({
                p_state,
                lesson,
            }));
    };

    console.log("p_state : " + p_state );

    useEffect(()=> {
        if(lesson){
    
        }
        if(lessonError){

        }
    },[history, lesson, lessonError]);

    return <CheckButton onAgree={onAgree} onCancle={onCancle} />
}

export default withRouter(CheckActionButtonContainer);