import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClassicalFetchA } from '../components/ClassicalFetchA';
import { ClassicalFetchB } from '../components/ClassicalFetchB';
import { StateProvider } from '../context/StateProvider';
import { Layout } from '../components/Layout';
import { ReactQueryA } from '../components/ReactQueryA';
import { ReactQueryB } from '../components/ReactQueryB';
import { MainContext } from '../components/MainContext';
import { MainRTKit } from '../components/MainRTKit';
const Router = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ReactQueryA />} />
            <Route path="/query-b" element={<ReactQueryB />} />
            <Route path="/fetch-a" element={<ClassicalFetchA />} />
            <Route path="/fetch-b" element={<ClassicalFetchB />} />
            <Route path="/main-context" element={<MainContext />} />
            <Route path="/main-rtkit" element={<MainRTKit />} />
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  );
};

export default Router;
