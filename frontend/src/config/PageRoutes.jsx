import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ProjectDetails from '../components/Projects/ProjectDetails';
import AdminPage from '../pages/AdminPage';
import ArticlePage from '../pages/ArticlePage';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/article' element={<ArticlePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin/:optitle' element={<AdminPage />} />
      <Route path='/:project/:id' element={<ProjectDetails />} />
      <Route path='/' exact element={<HomePage />} />
    </Routes>
  );
};

export default PageRoutes;
