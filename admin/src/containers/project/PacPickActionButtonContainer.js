import React, {useEffect} from 'react';
import CheckButton from '../../common/CheckButton'
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {checkPick} from '../../modules/pickButton2';
import {checkNoPick} from '../../modules/pickNoButton2';

const PacPickActionButtonContainer = ({history, project}) => {
    const dispatch=useDispatch();
    const {  p_pick,
            p_pick2, 
       
            projectError
        } = useSelector(({pickButton2, pickNoButton2}) => ({
            p_pick: pickButton2.p_pick,
            p_pick2 : pickNoButton2.p_pick
  
    }));





    
    const onCancle = () => {
        dispatch(
            checkNoPick({
                p_pick2,
            
                project,
            })
            )
            console.log("p_pick2 : " + p_pick2 )
    };
    const onAgree = () => {
        dispatch(
            checkPick({
                p_pick,
    
                project,
            })
        )
    };





        console.log("p_pick : " + p_pick )
    useEffect(()=> {
        if(project){
           
            history.push('/project');
        }
        if(projectError){
     
        }
    },[history, project, projectError]);


    return <CheckButton onAgree={onAgree} onCancle={onCancle} />

}

export default withRouter(PacPickActionButtonContainer);