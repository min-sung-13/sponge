import React from 'react';
import '../../scss/style_class1.css';
import { withRouter } from 'react-router-dom';

const Mppoint = ({user, point}) => {

    var fp;
    if(point){
        fp = point;
        fp = fp.filter(k => k.u_id === user.u_id);
    }
    var myp = 0;
    for(var k = 0; k < fp.length; k++){
        myp += fp[k].u_getPoint - fp[k].u_usePoint;
    }

    return(
        <>
            <div className="myPageTitle">포인트</div>
            <div className="myPageExpain">포인트 적립, 사용 내역입니다.</div>
            <div>
                <div className="bt10">현재 사용 가능한 포인트는 <span className="pc">{myp}p</span> 입니다.</div>
                <table className="mytable">
                    <tbody>
                        <tr>
                            <th>날짜</th>
                            <th>적립 포인트</th>
                            <th>사용 포인트</th>
                            <th>보유 포인트</th>
                        </tr>
                        {fp.map(p => 
                            <tr>
                                <td>{new Date(p.u_updateDate).getFullYear() + '-' + (new Date(p.u_updateDate).getMonth() + 1 ) + '-' + new Date(p.u_updateDate).getDate()}</td>
                                <td>{p.u_getPoint === 0 ? <span></span> : p.u_getPoint + 'p'}</td>
                                <td>{p.u_usePoint === 0 ? <span></span> : p.u_usePoint + 'p'}</td>
                                <td></td>
                            </tr>
                            )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{myp}p</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default withRouter(Mppoint);
