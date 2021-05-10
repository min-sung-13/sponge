import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditBarForm from '../../components/dashboard/EditBarForm';
import {updateProject} from '../../modules/makepac'
import { readPac, unloadPac } from '../../modules/pac';
import { listRes } from '../../modules/res';

const EditProjectContainer = ({ history, onSubmit, match }) => {

    const dispatch = useDispatch();
    const { user, makepac } = useSelector(({ user, makepac }) => ({
        user: user.user,
        makepac: makepac.pac
    }));

    const makeProjectSubmit = ({p_title, p_img}) => {
        console.log(p_img);
        dispatch(updateProject({p_title, p_img}));
    }

    const { p_addr } =  match.params;
    console.log(p_addr);
    console.log('detail p_addr' + p_addr)
    const { pac, error, loading, res } = useSelector(({ pac, loading, res }) => ({
        pac: pac.pac,
        error: pac.error,
        res: res.res,
        loading: loading['pac/READ_PAC']
    }));

    useEffect(() => {
        dispatch(readPac(p_addr));
        dispatch(listRes());
        return () => {
            dispatch(unloadPac());
        };
    }, [dispatch, p_addr]);

    // useEffect(() => {
    //     if(makepac){
    //         history.push('/mypage');
    //     }
    // }, [dispatch, history, makepac, user]);

    return (
        <EditBarForm type="join" onSubmit={onSubmit} makeProjectSubmit={makeProjectSubmit} user={user} history={history} pac={pac} />
    );
};

export default withRouter(EditProjectContainer);