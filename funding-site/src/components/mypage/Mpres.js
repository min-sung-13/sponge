import React from 'react';
import '../../scss/style_class1.css';
import { withRouter, Link } from 'react-router-dom';
import { deleteRes } from '../../modules/resd';
import { useDispatch }  from 'react-redux';

const Mpres = ({user, res, pac}) => {

    var myres;

    const dispatch = useDispatch();
    const cancelRes = (data) =>{
        console.log(data + "***************************");
        console.log({_id : data});
        dispatch(deleteRes({_id : data}));
    }

    const deleteButton = (data) => {
        console.log(data + "//////////////////////////////")
        cancelRes(data);
    }

    if(res && pac){
        myres = res;
        myres = res.filter(k => k.r_userid === user.u_id);
        console.log('myres : ' + myres);

        const getProject = (data) => {
            console.log(data);
            var i;
            for(var k = 0; k < pac.length; k++){
                if(pac[k]._id === data){
                    i = pac[k].p_title;
                }
            }
            return i;
        }

        const getProjectAddr = (data) => {
            var i;
            for(var k = 0; k < pac.length; k++){
                if(pac[k]._id === data){
                    i = pac[k].p_addr;
                }
            }
            return i;
        }

        const getProjectEnddate = (data) => {
            var i;
            for(var k = 0; k < pac.length; k++){
                if(pac[k]._id === data){
                    i = pac[k].p_lastDate;
                }
            }
            return i;
        }
        return(
            <>
                <div className="myPageTitle">예약 내역</div>
                <div className="myPageExpain">예약하신 프로젝트, 클래스 내역입니다.</div>
                <div>
                    <table className="mytable3">
                        <tbody>
                            <tr>
                                <th>날짜</th>
                                <th>프로젝트</th>
                                <th>구매내용</th>
                                <th>가격</th>
                                <th>취소여부</th>
                            </tr>
                            {myres.map(p => 
                                <tr>
                                    <td>{new Date(p.r_date).getFullYear() + '-' + (new Date(p.r_date).getMonth() + 1 ) + '-' + new Date(p.r_date).getDate()}</td>
                                    <Link to={`/projectDetail/${getProjectAddr(p.r_code)}`}><td>{getProject(p.r_code)}</td></Link>
                                    <td>{p.r_detail}</td>
                                    <td>{p.r_price}￦</td>
                                    <td>{getProjectEnddate(p.r_code) < new Date() ? '취소불가' : <button onClick={()=>deleteButton(p._id)}>취소</button>}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }else{
        return(
            <div>ㅎㅇ</div>
        )
    }

    
};

export default withRouter(Mpres);
