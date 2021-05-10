import React from 'react';
import '../../scss/style_fundding.css';
import Moment from 'react-moment';

const NoticeForm = ({notice}) => {
	console.log(notice);

	if(notice) {
		return(
			<>
			<div className="inner_box">
				<div id="newContainer">
					<div id="wBoardWrap">
						<div class="wboard-wrap">
							<div class="wboard-detail-content">
								<div class="article-top">
									<p class="title">{notice.n_title}</p>
									<div class="info">
										<em class="user-img" style={{'backgroundImage':'url(https://static.wadiz.kr/assets/icon/apple-touch-icon.png)'}}></em>
										<span class="user-info">스펀지
										<br/><Moment  format="YYYY/MM/DD">{notice.n_date}</Moment></span>
									</div>
								</div>
								<div class="inner-contents"dangerouslySetInnerHTML={ {__html: notice.n_content} }>
								</div>
								<div class="article-attached">
									<ul>
										{ notice.n_image ? <img src={notice.n_image} alt="공지 이미지" /> : null}
										
									</ul>
								</div>
							</div>
						</div>
						<div class="wcommunity-detail-bottom">
							<div class="wcommunity-share-area">
								<div class="btn-share">
									<button class="kakao" onclick="wadiz.share.kakao();"></button>
									<button class="facebook" onclick="wadiz.share.facebook();"></button>
									<button class="twitter" onclick="wadiz.share.twitter();"></button>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
			</>
		);
		}else{
			return(
				<div>야</div>
			)
		}
    
};

export default NoticeForm;
