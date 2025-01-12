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
const SignUp = lazy(() => import('./components/SignUp'));
const SellerProfile = lazy(() => import('./components/Seller/SellerProfile'));
const SellerAddProduct = lazy(() => import('./components/Seller/SellerAddProduct'));
const SellerPendingOrders = lazy(() => import('./components/Seller/SellerPendingOrders'));  
const SellerOrderHistory = lazy(() => import('./components/Seller/SellerOrderHistory'));
const SellerMessages = lazy(() => import('./components/Seller/SellerMessages'));
const SellerDuePayments = lazy(() => import('./components/Seller/SellerDuePayments'));
const SellerPaymentsHistory = lazy(() => import('./components/Seller/SellerPaymentHistory'));
const SellerSettings = lazy(() => import('./components/Seller/SellerSettings'));
const SellerSetDiscounts = lazy(() => import('./components/Seller/SellerSetDiscounts'));
const SellerAbout = lazy(() => import('./components/Seller/SellerAbout'));
const SellerRiders = lazy(() => import('./components/Seller/SellerRiders'));
const SellerContact = lazy(() => import('./components/Seller/SellerContact'));  


const CustomerProfile = lazy(() => import('./components/Customer/CustomerProfile'));
const CustomerShop = lazy(() => import('./components/Customer/CustomerShop'));
const CustomerDue = lazy(() => import('./components/Customer/CustomerDue'));
const CustomerStatement = lazy(() => import('./components/Customer/CustomerStatement'));


const SellerModifyProduct = lazy(() => import('./components/Seller/SellerModifyProduct'));  
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
            <Route path="/signup" element={<SignUp />} />

            <Route path="/seller-home" element={<SellerHome />} />
            <Route path="/seller-profile" element={<SellerProfile />} />
            <Route path="/seller-add-product" element={<SellerAddProduct />} />
            <Route path="/seller-modify-product" element={<SellerModifyProduct />} />
            <Route path="/seller-pending-orders" element={<SellerPendingOrders />} />
            <Route path="/seller-order-history" element={<SellerOrderHistory />} /> 
            <Route path="/seller-messages" element={<SellerMessages />} />
            <Route path="/seller-due-payments" element={<SellerDuePayments />} />
            <Route path="/seller-payments-history" element={<SellerPaymentsHistory />} />
            <Route path="/seller-settings" element={<SellerSettings />} />
            <Route path="/seller-set-discounts" element={<SellerSetDiscounts />} />
            <Route path="/seller-about" element={<SellerAbout />} />
            <Route path="/seller-riders" element={<SellerRiders />} />
            <Route path="/seller-contact" element={<SellerContact />} />


            <Route path="/customer-home" element={<CustomerHome />} />
            <Route path="/customer-profile" element={<CustomerProfile />} />
            <Route path="/customer-shop" element={<CustomerShop />} />
            <Route path="/customer-due" element={<CustomerDue />} />
            <Route path='/customer-statement' element={<CustomerStatement />} />
            {/* <Route path="/customer-favourite-shops" element={<CustomerFavouriteShops />} /> */}

          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;