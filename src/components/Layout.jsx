import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomerNavbar from './Customer/CustomerNavBar';
import CustomerFooter from './Customer/CustomerFooter';

const Layout = ({ children }) => {
    const location = useLocation();
    const isSellerRoute = location.pathname.startsWith('/seller');
    const isCustomerRoute = location.pathname.startsWith('/customer');

    return (
        <>
            {!isSellerRoute && !isCustomerRoute && <Header />}
            {isCustomerRoute && <CustomerNavbar />}
            {children}
            {isCustomerRoute && <CustomerFooter />}
            {!isSellerRoute && !isCustomerRoute && <Footer />}
        </>
    );
};

export default Layout;









// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';

// const Layout = ({ children }) => {
//     const location = useLocation();
//     const isSellerRoute = location.pathname.startsWith('/seller');

//     return (
//         <>
//             {!isSellerRoute && <Header />}
//             {children}
//             {!isSellerRoute && <Footer />}
//         </>
//     );
// };

// export default Layout;