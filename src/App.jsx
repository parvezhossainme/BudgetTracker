import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const SignInCustomer = lazy(() => import('./components/Customer/SignInCustomer'));
const SignInSeller = lazy(() => import('./components/Seller/SignInSeller.jsx'));
const SellerHome = lazy(() => import('./components/Seller/SellerHome.jsx'));
const CustomerHome = lazy(() => import('./components/Customer/CustomerHome'));
const SignAsParvez = lazy(() => import('./components/Admin/SignAsParvez.jsx'));

// Add other components here

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin-customer" element={<SignInCustomer />} />
            <Route path="/signin-seller" element={<SignInSeller />} />
            <Route path="/signin-parvez" element={<SignAsParvez />} />
            <Route path="/seller-home" element={<SellerHome />} />
            <Route path="/customer-home" element={<CustomerHome />} />
            {/* Add other routes here */}
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;




// import React, { Suspense, lazy } from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';

// // Lazy load components
// const Home = lazy(() => import('./components/Home'));
// const SignInCustomer = lazy(() => import('./components/Customer/SignInCustomer'));
// const SignInSeller = lazy(() => import('./components/Seller/SignInSeller.jsx'));
// const SellerHome = lazy(() => import('./components/Seller/SellerHome.jsx'));
// const CustomerHome = lazy(() => import('./components/Customer/CustomerHome'));
// const SignAsParvez = lazy(() => import('./components/Admin/SignAsParvez.jsx'));

// // Add other components here

// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signin-customer" element={<SignInCustomer />} />
//             <Route path="/signin-seller" element={<SignInSeller />} />
//             <Route path="/signin-parvez" element={<SignAsParvez />} />
//             <Route path="/seller-home" element={<SellerHome />} />
//             <Route path="/customer-home" element={<CustomerHome />} />
//             {/* Add other routes here */}
//           </Routes>
//         </Layout>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;