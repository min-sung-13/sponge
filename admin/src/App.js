import React from 'react';
import { Route } from 'react-router-dom';
import NoticeListPage from './pages/NoticeListPage';
import AuthListPage from './pages/AuthListPage';
import ProjectListPage from './pages/ProjectListPage';
import LessonListPage from './pages/LessonListPage';
import AdvertisePage from './pages/AdvertisePage'; 
import CouponListPage from './pages/CouponListPage';
function App() {
  return (
    <>
      <Route component={NoticeListPage} path={'/notice'} />
      <Route component={AuthListPage} exact path={'/'}/>
      <Route component={LessonListPage} path={'/class'} />
      <Route component={ProjectListPage} path={'/project'}/>
      <Route component={AdvertisePage} path={'/advertise'}/>
      <Route component={CouponListPage} path={'/coupon'}/>
    </>
  );
}

export default App;
