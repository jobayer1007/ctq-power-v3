import React from 'react';

import { Routes, Route } from 'react-router-dom';
import AllSubMenu from '../components/AllSubMenu/AllSubMenu';
import ProjectDetails from '../components/Projects/ProjectDetails';
import ProjectDetailsD from '../components/Projects/ProjectDetailsD';
import AdminPage from '../pages/AdminPage';
import AdminPageDynamic from '../pages/AdminPageDynamic';
import ArticlePage from '../pages/ArticlePage';
import DashBoardPage from '../pages/DashBoardPage/DashBoardPage';

import HomePage from '../pages/HomePage';
import HomePageD from '../pages/HomePageD';
import LoginPage from '../pages/LoginPage/LoginPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/article' element={<ArticlePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashBoardPage />} />
      <Route path='/admin/:optitle' element={<AdminPageDynamic />} />
      <Route path='/:project/:id' element={<ProjectDetailsD />} />
      <Route path='/all/:id' element={<AllSubMenu />} />
      <Route path='/' exact element={<HomePageD />} />
    </Routes>
  );
};

export default PageRoutes;
