import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MakeBarForm from '../../components/make/MakeBarForm';
import {addProject} from '../../modules/makepac'

const MakeProjectContainer = ({ history, onSubmit, location }) => {

    const dispatch = useDispatch();
    const { user, makepac } = useSelector(({ user, makepac }) => ({
        user: user.user,
        makepac: makepac.pac
    }));

    const makeProjectSubmit = ({p_title, p_explain, p_cate, p_addr, p_tag, p_img, p_maker, p_startDate, p_lastDate, p_refund, p_video, p_story, p_hit, p_state, p_type, p_pick, p_project}) => {
        console.log(p_img);
        dispatch(addProject({p_title, p_explain, p_cate, p_addr, p_tag, p_img, p_maker, p_startDate, p_lastDate, p_refund, p_video, p_story, p_hit, p_state, p_type, p_pick, p_project}));
    }

    useEffect(() => {
        if(makepac){
            history.push('/mypage');
        }
    }, [dispatch, history, makepac, user]);

    return (
        <MakeBarForm type="join" onSubmit={onSubmit} makeProjectSubmit={makeProjectSubmit} user={user} history={history} location={location}/>
    );
};

export default withRouter(MakeProjectContainer);