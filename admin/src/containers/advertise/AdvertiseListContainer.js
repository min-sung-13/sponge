import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {listAdvertises} from '../../modules/advertises'
import AdvertiseList from '../../components/common/advertise/AdvertiseList'

const AdvertiseContainer = ({location}) => {
    const dispatch = useDispatch();
    const {advertises, error, loading} = 
    useSelector(
        ({advertises, loading}) => ({
            advertises: advertises.advertises,
            error: advertises.error,
            loading: loading['advertise/LIST_ADVERTISES']
        })
    )

    useEffect(()=> {
        const{a_userid, a_title, a_content, a_color,a_img, a_startdate, a_enddate, a_allow, a_price } = qs.parse(location.search, {
            ignoreQueryPrefix:true
        });
        dispatch(listAdvertises({a_userid, a_title, a_content, a_color,a_img, a_startdate, a_enddate, a_allow, a_price
        }))
    },[dispatch, location.search]);

    return(
        <AdvertiseList
            loading={loading}
            error={error}
            advertises={advertises}
        />
    )
}

export default withRouter(AdvertiseContainer);