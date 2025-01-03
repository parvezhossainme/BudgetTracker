/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const SignIn = lazy(() => import('./components/SignIn'));
// Add other components here

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin-customer" element={<SignIn />} />
          <Route path="/signin-seller" element={<SignIn />} />
          <Route path="/signin-parvez" element={<SignIn />} />
          {/* Add other routes here */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;