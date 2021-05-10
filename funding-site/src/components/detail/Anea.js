import React from 'react';


const Anea = ({pac, las}) =>{

    var mylas;
    console.log(las)
    if(las){
        mylas = las.filter(k => k.ls_productcode === pac._id);
        mylas = mylas.filter(k => k.ls_type === 'sign');
        console.log(mylas)
    }
    return(
        <>
        <div className="refund_title">[지지서명]</div>
        <table className="mytable4">
            <tbody>
                <tr>
                    <th>지지자</th>
                    <th>지지서명 내용</th>
                </tr>
                {mylas.map(t => 
                    <tr>
                        <td>{"****"+ t.ls_myid.substring(3)}</td>
                        <td>{t.ls_signtext}</td>
                    </tr>   
                )}
            </tbody>
        </table>
        <div className="refund_title">[환불정책]</div>
        <div className="refund_content" dangerouslySetInnerHTML={ {__html: pac.p_refund} }></div>
        </>
    )
};

export default Anea;