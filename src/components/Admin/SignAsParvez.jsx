import React from 'react';

const SignAsParvez = () => {
  return (
    <div id="container" className="min-h-screen container mx-auto p-4">
      {/* FORM SECTION */}
      <div className="row flex flex-col md:flex-row">
        {/* SIGN UP */}
        <div className="col flex flex-col items-center sign-up">
          <div className="form-wrapper flex flex-col items-center">
            <div className="form sign-up">
              <div className="input-group flex items-center mb-4">
                <i className='bx bxs-user mr-2'></i>
                <input type="text" placeholder="Username" className="border p-2 rounded w-full" />
              </div>
              <div className="input-group flex items-center mb-4">
                <i className='bx bx-mail-send mr-2'></i>
                <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
              </div>
              <div className="input-group flex items-center mb-4">
                <i className='bx bxs-lock-alt mr-2'></i>
                <input type="password" placeholder="Password" className="border p-2 rounded w-full" />
              </div>
              <div className="input-group flex items-center mb-4">
                <i className='bx bxs-lock-alt mr-2'></i>
                <input type="password" placeholder="Confirm password" className="border p-2 rounded w-full" />
              </div>
              <button className="bg-blue-500 text-white p-2 rounded w-full">
                Sign up
              </button>
              <p className="mt-4">
                <span>Already have an account?</span>
                <b onClick={() => toggle()} className="pointer text-blue-500 cursor-pointer ml-2">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col flex flex-col items-center sign-in">
          <div className="form-wrapper flex flex-col items-center">
            <div className="form sign-in">
              <div className="input-group flex items-center mb-4">
                <i className='bx bxs-user mr-2'></i>
                <input type="text" placeholder="Username" className="border p-2 rounded w-full" />
              </div>
              <div className="input-group flex items-center mb-4">
                <i className='bx bxs-lock-alt mr-2'></i>
                <input type="password" placeholder="Password" className="border p-2 rounded w-full" />
              </div>
              <button className="bg-blue-500 text-white p-2 rounded w-full">
                Sign in
              </button>
              <p className="mt-4">
                <b className="text-blue-500 cursor-pointer">Forgot password?</b>
              </p>
              <p className="mt-4">
                <span>Don't have an account?</span>
                <b onClick={() => toggle()} className="pointer text-blue-500 cursor-pointer ml-2">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row flex flex-col md:flex-row">
        {/* SIGN IN CONTENT */}
        <div className="col flex flex-col items-center">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col flex flex-col items-center">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
};

export default SignAsParvez;