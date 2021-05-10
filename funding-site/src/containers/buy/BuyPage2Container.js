import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listPoint} from '../../modules/point';
import { addpointm } from '../../modules/addpoint';
import { addRes } from '../../modules/res';
import { readPac, unloadPac } from '../../modules/pac';
import BuyPage2Form from '../../components/buy/BuyPage2Form';

const BuyPage2Container = ({ match, history }) => {
    const { p_addr } =  match.params;
    console.log('container p_addr : ' + p_addr)
    const dispatch = useDispatch();
    const { pac, error, loading, user, point, addpoint } = useSelector(({ pac, loading, user, point, addpoint }) => ({
        pac: pac.pac,
        error: pac.error,
        user: user.user,
        point: point.point,
        addpoint: addpoint.addpoint,
        loading: loading['pac/READ_PAC']
    }));

    const saveResButton = (data) => {
        const { r_code, r_userid, r_price, r_detail, r_phone, r_addr } = data;
        dispatch(addRes({ r_code, r_userid, r_price, r_detail, r_phone, r_addr }));
        history.push(`/buy3/${p_addr}`);
    }

    const addPoint = (data) =>{
        const { u_id, u_getPoint, u_usePoint} = data;
        dispatch(addpointm({ u_id, u_getPoint, u_usePoint}));
    }

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listPoint());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);
    console.log("pac2 : " + pac);
    return <BuyPage2Form history={history} p_addr={p_addr} user={user} point={point} pac={pac} saveResButton={saveResButton} addPoint={addPoint}/>;
};

export default withRouter(BuyPage2Container);