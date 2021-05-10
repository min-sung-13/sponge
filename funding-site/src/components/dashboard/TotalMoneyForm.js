import React, { Component } from 'react';
import closeWindow from '../../image/closeWindow.png';
import result_alert from '../../image/result_alert.png';
import '../../scss/style_class1.css';


class TotalMoneyForm extends Component {
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
            var price = 0;
            var people = 0;
            var lastDate = new Date(pac.p_lastDate);
            var caldate = 1;
            lastDate.setUTCDate(lastDate.getDate() + caldate);
            lastDate = lastDate.toLocaleDateString().replace(". ", "-").replace(". ", "-").replace(".", "");

            r = res.filter(k => k.r_code === pac._id);
            for(var i =0; i< r.length; i++){
                price += r[i].r_price;
            }
            for(var w =0; w< r.length; w++){
                people++;
            }
                return(
                    <>
                    { isOpen ? 
                        ( <div id="total_box" onClick={close}>
                            <div id="wrap_money">
                                <div class="result_popup">
                                    <div class="popup_titlebar">
                                        <button class="close_popup" onClick={close}>
                                            <img src={closeWindow} alt="명세서 팝업 닫기" onClick={close} />
                                        </button>
                                        <h3>모금액 명세서</h3>
                                    </div>
                                    <div class="alert_text">
                                        <p class="alert_title"><img src={result_alert} alt="정산완료" />정산 예정입니다.</p>
                                        {/* 계좌 : 끝에 4자리만 나타남 */}
                                        <p class="owner_info">등록하신 계좌({pac.p_maker.m_account.bankname}은행, {pac.p_maker.m_account.banknum.slice(-4)}, {pac.p_maker.m_name})로 { lastDate }에 정산 될 예정입니다.</p>
                                        <p class="alert_info">창작자는 정산금을 지급받은 후 창작자 구분(개인, 개인사업자, 법인사업자)에 해당하는 법령에 맞게 세무 신고 및 세금을 납부해야 할 의무가 있습니다. <br /> 정산 명세서를 참고하시어 프로젝트에 맞는 방식으로 세무 신고의 책임을 다하시기 바랍니다.<br /> 상세한 신고방법은 국세청(국번 없이 126)이나 관할 세무서로 문의하시면 안내받으실 수 있습니다.</p>
                                        <p class="alert_info">스펀지는 창작자의 매출 관련 자료를 국세청에 제출할 의무가 있습니다. <br /> 창작자의 사업자등록 여부와 관계없이 국세청에 매출 관련 자료가 전송되며, 창작자 정보(사업자인 경우 사업자 정소, 개인인 경우 성명과 주민등록번호)가 함께 전달됩니다.</p>
                                    </div>
                                    <div class="total_money">
                                        <ul class="money_cal">
                                            <li class="cal_wide cal_title">모금액</li>
                                            <li class="float">총 모금액({people}명)</li>
                                            <li class="textR floatR">{price.toLocaleString()}원</li>
                                            <li class="float result_money">A. 총 결제금액({people}명)</li>
                                            <li class="textR floatR result_money">{price.toLocaleString()}원</li>
                                            <li class="cal_wide float"> </li>
                                            <li class="cal_wide float cal_title">수수료</li>
                                            <li class="float">수수료(%)</li>
                                            <li class="textR floatR">5%</li>
                                            <li class="float result_money">A. 총 정산금액</li>
                                            <li class="textR floatR result_money">{(price * 0.95).toLocaleString()}원</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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

export default TotalMoneyForm;