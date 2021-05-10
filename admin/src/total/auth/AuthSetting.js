import React, {Component} from 'react';
import AuthList from '../../components/common/authList/AuthList'
import AuthListContainer from '../../containers/auths/AuthListContainer'

<script src="../assets/js/paper-dashboard.min.js?v=2.0.1" type="text/javascript"></script>

class AuthSetting extends Component {
  render(){
    return (
      <body className="">
        <div className="wrapper ">
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a href="https://www.creative-tim.com" className="simple-text logo-mini">
              </a>
              <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                SPONGE
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="active ">
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
                  <a className="navbar-brand" href="javascript:;">회원관리</a>
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
                      <a className="nav-link btn-magnify" href="javascript:;">
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
                      <a className="nav-link btn-rotate" href="javascript:;">
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
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        회원목록
                      </h4>
                    </div>
                  <AuthListContainer />
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer footer-black  footer-white ">
              <div className="container-fluid">
                <div className="row">
                  <nav className="footer-nav">
                    <ul>
                      <li><a href="/" target="_blank">SPONGE</a></li>
                      <li><a href="/" target="_blank">funding</a></li>
                      <li><a href="/" target="_blank">className</a></li>
                    </ul>
                  </nav>
                  <div className="credits ml-auto">
                    <span className="copyright">
                      © <script>
                        document.write(new Date().getFullYear())
                      </script>, made with <i className="fa fa-heart heart"></i> by Creative SPONGE
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    )
  }       
}
    
export default AuthSetting;