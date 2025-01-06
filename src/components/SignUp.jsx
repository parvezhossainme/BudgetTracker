import React from 'react';
import signup_img from '../assets/SignUpPage/signup_img.png';


// Image Section
// <div className="w-max h-max md:w-1/2 flex justify-center animate-slideInLeft">
//   {/* Setting a larger fixed width and height */}
//   <img src={signup_img} alt="Image from Sign Up" className="w-max h-max md:w-96 md:h-96 object-contain" />
// </div>

const SignUp = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <main className="flex flex-col md:flex-row items-center p-6 space-y-8 md:space-y-0 md:space-x-12 animate-fadeIn">

        <div className="">
          <img src={signup_img} alt="Image from Sign Up" className="" />
        </div>

        {/* Form Section */}
        <div className="bg-slate-100 p-8 rounded-lg shadow-lg max-w max-h animate-slideInRight">
          <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>
          <p className="mb-6 text-gray-600 text-center">
            Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail.
          </p>
          
          <div className="flex items-center bg-gray-200 p-4 rounded mb-6 animate-pulse">
            <span className="text-xl mr-3">🔒</span>
            <p className="text-sm text-gray-700">We take privacy issues seriously. Your personal data is securely protected.</p>
          </div>

          <form>
            <div className="mb-4">
              <label className="block">
                <input type="radio" name="user-type" value="seller" className="mr-2" /> Sign In As Seller
              </label>
              <label className="block">
                <input type="radio" name="user-type" value="customer" className="mr-2" defaultChecked /> Sign In As Customer
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="phone-number" className="block mb-2 text-sm text-gray-600">Enter your phone number</label>
              <div className="flex">
                <select className="border border-gray-300 rounded-l px-4 py-2">
                  <option value="+880">+880</option>
                </select>
                <input
                  type="text"
                  id="phone-number"
                  placeholder="13220XXXXX"
                  className="border border-gray-300 rounded-r px-4 py-2 flex-grow focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-700 focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
              Send Code
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
