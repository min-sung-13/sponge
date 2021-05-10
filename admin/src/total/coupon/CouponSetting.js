import React, {Component} from 'react';
import $ from 'jquery';
import CouponAdd from '../../components/common/coupounList/CouponAddList'
//import NoticeListContainer from '../../containers/notices/NoticeListContainer'

import '../../index.css'
import jQuery from 'jquery';
//import loading from '../../modules/loading';
window.$ = jQuery;
window.jQuery = jQuery;





<script src="../assets/js/paper-dashboard.min.js?v=2.0.1" type="text/javascript"></script>




jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}




 


  $(function(){
      $(".btn_cancle").on("click", function(){
          $(".noti_replace").css({"display":"none"});
      });
    })


  
    $(function(){
      $(".btn_notice").on("click", function(){
        $(".noti-write").show();
        $(".noti-write").center();
      })
    })

    $(function(){
      $(".ques_bt").on("click", function(){
        $(".noti_replace").show();
        $(".noti_replace").center();
      })
    })


  $(function(){
      $(".btn_cancle-1").on("click", function(){
          $(".noti-write").css({"display":"none"});
      });
  })

  $(function(){
    $(".btn_submit-1").on("click", function(){
      $(".noti-write").css({"display":"none"});
      //window.location.reload();
    });
})





class NoticeSetting extends Component {
  render(){
      return (
            
<body class="">
    <div className="wrapper ">
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
          <a href="https://www.creative-tim.com" className="simple-text logo-mini">
          </a>
        <a href="https://www.creative-tim.com" className="simple-text logo-normal">
          SPONGE
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul className="nav">
          <li>
            <a href="/">
              <i className="nc-icon nc-single-02"></i>
              <p>회원 관리</p>
            </a>
          </li>
          <li>
            <a href="/project">
              <i className="nc-icon nc-world-2"></i>
              <p>프로젝트 관리</p>
            </a>
          </li>
          <li>
            <a href="/class">
              <i className="nc-icon nc-bank"></i>
              <p>클래스 관리</p>
            </a>
          </li>
          <li className="active">
            <a href="/coupon">
              <i className="nc-icon nc-support-17"></i>
              <p>쿠폰 관리</p>
            </a>
          </li>
          <li>
            <a href="/notice">
              <i className="nc-icon nc-paper"></i>
              <p>공지사항 관리</p>
            </a>
          </li>
          <li>
            <a href="/advertise">
              <i className="nc-icon nc-tv-2"></i>
              <p>광고 관리</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="main-panel">
      
      <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <form>
              <div className="input-group no-border">
                <input type="text" value="" className="form-control" placeholder="Search..."/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i className="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn-magnify" href="">
                  <i className="nc-icon nc-layout-11"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li className="nav-item btn-rotate dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="nc-icon nc-bell-55"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-rotate" href="">
                  <i className="nc-icon nc-settings-gear-65"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="col-md-12">
        <div className="card card-plain">
          <div className="card-header">
            <h4 className="card-title">쿠폰 관리</h4>
            <p className="card-category">쿠폰 목록</p>
          </div>
          <div>
              <button className="btn_notice">쿠폰 등록</button>
          </div>
          
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <nav className="footer-nav">
              <ul>
                <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                <li><a href="https://www.creative-tim.com/blog" target="_blank">Blog</a></li>
                <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © 2020, made with <i className="fa fa-heart heart"></i> by Creative Tim
              </span>
            </div>
          </div>
        </div>
      </footer>
      <CouponAdd />
    </div>
  </div>  
</body>
        
          )
    }
    
  }
export default NoticeSetting;