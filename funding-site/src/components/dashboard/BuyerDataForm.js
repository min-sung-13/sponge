import React, { Component } from 'react';
import '../../scss/style_fundding.css';
import thanks from '../../image/thankyou.png';

class BuyerDataForm extends Component {
    componentDidMount = () => {

    };
    render() {
        const {pac} = this.props;
        const {res} = this.props;
        const { isOpen, close } = this.props;
        if(pac){
            if(res){
            // console.log("pac : " + JSON.stringify(pac))
            var r = res;

            r = res.filter(k => k.r_code === pac._id);
            console.log(r)
                return(
                    <>
                    { isOpen ? 
                        ( <div id="popup_wrap" onClick={close}>
                            {r.map((buyer, i) => (
                            <div class="pop_total">  
                                <div class="pop_total2">
                                    <div class="pop_top_total">
                                        <div class="pop_profile_img">
                                            <img src={thanks}  />
                                        </div>
                                        <div class="pop_profile_info">
                                            <p class="pop_pro_info_name">{buyer.r_addr.ad_name}</p>
                                            <p class="pop_info_num"><span class="pop_info_num2">{i + 1}</span>번째 후원자</p>
                                        </div>
                                    </div>
                                    <div class="pop_middle_total">
                                        <div class="pop_middle_top">
                                            <p><span>선택한 선물</span> {buyer.r_price + 3000}원</p>
                                        </div>
                                        <div class="pop_middle_mid">
                                            <p>+ 배송비 3000원 포함</p>
                                            <ul>
                                                <li>{buyer.r_detail.split("/")}</li>
                                            </ul>
                                        </div>
                                    </div>    
                                    <div class="popup_btn_cancle">
                                        <input type="button" value="닫기" class="btn_cancle" onClick={close} />
                                    </div>
                                </div>  
                            </div>
                                ))}          
                        </div>) : null }
                    </>
                );
            }else {
                return(
                    <div>실패</div>
                )

            }
        }else {
            return(
                <div>실패</div>
            )
        }
    };
};

export default BuyerDataForm;