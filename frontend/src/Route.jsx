import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import PageTop from './pages/PageTop';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageTop />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;