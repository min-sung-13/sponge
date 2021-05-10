import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAdv} from '../../modules/adv';
import AdvertisementForm from '../../components/main/AdvertisementForm';

const AdvertisementContainer = ({ match }) => {
    const to_day = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    console.log(to_day)
    const dispatch = useDispatch();
    const { adv, error, loading } = useSelector(({ adv, loading }) => ({
        adv: adv.adv,
        error: adv.error,
        loading: loading['adv/READ_ADV']
    }));

    useEffect(() => {
        dispatch(listAdv(to_day));
    }, [dispatch, to_day]);

    if(adv){
        var adv2 = adv.filter(a => a.a_allow == "Y");
        return <AdvertisementForm adv={adv2} loading={loading} error={error}/>;
    }else{
        return <div>Loading...</div>;
    }
};

export default withRouter(AdvertisementContainer);