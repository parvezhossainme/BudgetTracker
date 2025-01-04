import React from "react";

const CustomerHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <section
          className="py-16 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background-pattern.jpg')" }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome to FoodMart
            </h1>
            <p className="text-white mt-4">
              Find the best groceries and fresh products at unbeatable prices.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg">
              Shop Now
            </a>
          </div>
        </section>

        {/* Category Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Categories</h2>
              <a href="#" className="text-yellow-500">
                View All Categories →
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Fruits & Vegetables",
                "Breads & Sweets",
                "Drinks",
                "Chocolates",
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg text-center">
                  <img
                    src={`/images/icon-${index + 1}.png`}
                    alt={category}
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerHome;

// import React from 'react';

// const CustomerHome = () => {
//   return (
//     <div>
//       {/* Header Section */}
//       <header className="bg-white shadow-md py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="logo">
//             <a href="/">
//               <img src="/images/logo.png" alt="logo" className="h-12" />
//             </a>
//           </div>
//           <div className="search-bar hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2">
//             <select className="bg-transparent border-none text-gray-600 focus:outline-none">
//               <option>All Categories</option>
//               <option>Groceries</option>
//               <option>Drinks</option>
//               <option>Chocolates</option>
//             </select>
//             <input
//               type="text"
//               className="bg-transparent border-none ml-4 focus:outline-none w-full"
//               placeholder="Search for more than 20,000 products"
//             />
//             <button className="text-gray-600">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="support hidden xl:block text-right">
//               <span className="text-sm text-gray-500">For Support?</span>
//               <h5 className="font-bold">+980-34984089</h5>
//             </div>
//             <div className="flex items-center space-x-4">
//               <a href="#" className="rounded-full bg-gray-100 p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v.01" />
//                 </svg>
//               </a>
//               <a href="#" className="rounded-full bg-gray-100 p-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Banner Section */}
//       <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/background-pattern.jpg')" }}>
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold text-white">Welcome to FoodMart</h1>
//           <p className="text-white mt-4">Find the best groceries and fresh products at unbeatable prices.</p>
//           <a href="#" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg">Shop Now</a>
//         </div>
//       </section>

//       {/* Category Section */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl font-bold">Categories</h2>
//             <a href="#" className="text-yellow-500">View All Categories →</a>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {['Fruits & Vegetables', 'Breads & Sweets', 'Drinks', 'Chocolates'].map((category, index) => (
//               <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
//                 <img src={`/images/icon-${index + 1}.png`} alt={category} className="h-16 mx-auto mb-4" />
//                 <h3 className="text-lg font-bold">{category}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 py-8">
//         <div className="container mx-auto text-center text-white">
//           <p>&copy; 2025 FoodMart. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CustomerHome;
