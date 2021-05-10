import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import '../../scss/style_fundding.css';
import BuyerDataForm from './BuyerDataForm';

// $ = jQuery;
// window.jQuery = jQuery;
class BuyerListForm extends Component {
    componentDidMount = () => {
    };

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            
        };
    }
    
    openModal = () => {
        console.log('openModal 호출');
        this.setState({ isModalOpen: true });

    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const {pac} = this.props;
        const {res} = this.props;
        if(pac){
            if(res){
                // console.log("pac : " + JSON.stringify(pac))
                var r = res;

                r = res.filter(k => k.r_code === pac._id);
                console.log(r);
    
                return(
                    <>
                        <div class="myBuyer">
                            <div class="my_buyer_top">
                                <div class="my_buyer_top2">
                                    <div class="inner_box">
                                        <p>후원자 목록</p>
                                    </div>
                                </div>        
                            </div>
                            <div class="my_buyer_bottom">
                                <div class="inner_box">
                                    <div class="buyer_bottom_total">
                                        <div class="buyer_bottom1">
                                            <p>결제가 완료된 후원자에 한해 배송 관련 개인정보를 열람하실 수 있습니다.</p>
                                        </div>  
                                        <div class="buyer_bottom2">
                                            <div>
                                                <div class="buyer_bottom2_list buyer_list">
                                                    <ul>
                                                        <li className="moveleft">후원번호</li>
                                                        <li className="moveleft left">후원자 이름</li>
                                                        <li className="moveleft left">결제금액</li>
                                                        <li className="moveleft">후원날짜</li>
                                                        <li>출금상태</li>
                                                        <li>선물실행</li>
                                                    </ul>
                                                </div>   
                                                {r.map((buyer, i) => (
                                                    <div class="buyer_bottom2_list2 buyer_list">
                                                        <ul>
                                                            <li>
                                                                { (i >= 9) ? (i + 1) : ("0" + (i + 1)) }
                                                            </li>
                                                            <li>
                                                                <input type="button" value={buyer.r_addr.ad_name} class="buyerN" onClick={this.openModal} />
                                                            </li>
                                                            <li>{buyer.r_price}원</li>
                                                            <li>{buyer.r_date.slice(0, 10)}</li>
                                                            <li>
                                                                <span class="comple">결제완료</span>
                                                            </li>
                                                            <li>실행완료</li>
                                                        </ul>
                                                    </div>
                                                ))} 
                                                {/* map end */} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BuyerDataForm isOpen={this.state.isModalOpen} close={this.closeModal} pac={pac} res={res} />
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

export default BuyerListForm;