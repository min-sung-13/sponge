import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SpongeListPage from './pages/SpongeListPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MakePage from './pages/MakePage';
import StartMakePage from './pages/StartMakePage';
import NoticePage from './pages/NoticePage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import MakeAgreePage from './pages/MakeAgreePage';
import BuyPage1 from './pages/BuyPage1';
import BuyPage2 from './pages/BuyPage2';
import BuyPage3 from './pages/BuyPage3';
import MyPage from './pages/MyPage';
import ProjectDetail from './pages/ProjectDetail';
import Test from './pages/Test';
import Miribogi from './pages/Miribogi';
import PacDashboardPage from './pages/PacDashboardPage';
import SubmitAdvPage from './pages/SubmitAdvPage';
import BuyerListPage from './pages/BuyerListPage';
import EditPage from './pages/EditPage';



const App = () => {
  return (
    <>
      <Route component={MainPage} exact path="/"/>
      <Route component={SpongeListPage} path="/list"/>
      <Route component={LoginPage} path="/login"/>
      <Route component={JoinPage} path="/join"/>
      <Route component={MakePage} path="/make"/>
      <Route component={EditPage} path="/EditPage/:p_addr"/>  
      <Route component={StartMakePage} path="/startMake"/>
      <Route component={NoticePage} path="/notice"/>
      <Route component={NoticeDetailPage} path="/detail/:_id"/>
      <Route component={MakeAgreePage} path="/makeAgree"/>
      <Route component={BuyPage1} path="/buy1/:p_addr"/>
      <Route component={BuyPage2} path="/buy2/:p_addr"/>
      <Route component={BuyPage3} path="/buy3/:p_addr"/>
      <Route component={MyPage} path="/mypage"/>
      <Route component={ProjectDetail} path="/projectDetail/:p_addr"/>
      <Route component={Test} path="/test"/>
      <Route component={Miribogi} path="/miri"/>
      <Route component={PacDashboardPage} path="/pacDashboard/:p_addr"/>
      <Route component={SubmitAdvPage} path="/subadv"/>
      <Route component={BuyerListPage} path="/buyerList/:p_addr" />

      {/* <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login"/>
      <Route component={RegisterPage} path="/register"/>
      <Route component={WritePage} path="/write"/>
      <Route component={PostPage} path="/@:username/:postsId"/> */}
    </>
  );
}

export default App;
