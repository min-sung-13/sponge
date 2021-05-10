import React, {useEffect} from 'react';
import CheckButton from '../../common/CheckButton'
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {allowAdvertise} from '../../modules/allowButton';
import {allowNoAdvertise} from '../../modules/allowNoButton';


const AdvertiseActionButtonContainer = ({history, advertise}) => {
    const dispatch=useDispatch();
    const {
        a_allow,
        a_allow2,
        advertiseError
    } = useSelector(({allowButton, allowNoButton}) => ({
        a_allow: allowButton.a_allow,
        a_allow2: allowNoButton.a_allow    
    }));

    const onCancle = () => {
        dispatch(
            allowNoAdvertise({
                a_allow2,
                advertise,
            }));
        console.log("p_stateNo : " + a_allow2 )
    };

    const onAgree = () => {
        console.log("onAgree allow: " + a_allow);
        console.log("onAgree advertise: " + advertise._id);

        dispatch(
            allowAdvertise({
                a_allow,
                advertise,
            }));
    };

    console.log("a_allow : " + a_allow )
        
    useEffect(()=> {
        if(advertise){
            history.push('/advertise');
        }
        if(advertiseError){
            
        }
    },[history, advertise, advertiseError]);


    return <CheckButton onAgree={onAgree} onCancle={onCancle}  />

}

export default withRouter(AdvertiseActionButtonContainer);