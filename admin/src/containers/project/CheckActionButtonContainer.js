import React, {useEffect} from 'react';
import CheckButton from '../../common/CheckButton'
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {checkProject} from '../../modules/checkButton';
import {checkNoProject} from '../../modules/checkNoButton';

const CheckActionButtonContainer = ({history, project}) => {
    const dispatch=useDispatch();
    const {  p_state,
            p_state2,
       
        projectError
        } = useSelector(({checkButton, checkNoButton}) => ({
        p_state: checkButton.p_state,
        p_state2: checkNoButton.p_state
  
    }));





    
    const onCancle = () => {
        dispatch(
            checkNoProject({
                p_state2,
            
                project,
            })
            )
            console.log("p_stateNo : " + p_state2 )
    };
    const onAgree = () => {
        dispatch(
            checkProject({
                p_state,
    
                project,
            })
        )
    };





        console.log("p_state : " + p_state )
    useEffect(()=> {
        if(project){
           
            history.push('/project');
        }
        if(projectError){
     
        }
    },[history, project, projectError]);


    return <CheckButton onAgree={onAgree} onCancle={onCancle} />

}

export default withRouter(CheckActionButtonContainer);