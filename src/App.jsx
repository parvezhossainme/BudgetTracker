/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const SignInCustomer = lazy(() => import('./components/SignInCustomer'));
const SignInSeller = lazy(() => import('./components/SignInSeller'));
const SignInParvez = lazy(() => import('./components/SignInParvez'));
const SellerHome = lazy(() => import('./components/SellerHome'));

// Add other components here

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin-customer" element={<SignInCustomer />} />
          <Route path="/signin-seller" element={<SignInSeller />} />
          <Route path="/signin-parvez" element={<SignInParvez />} />
          <Route path="/seller-home" element={<SellerHome />} />
          {/* Add other routes here */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;