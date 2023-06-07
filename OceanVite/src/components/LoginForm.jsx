import React from "react";

const LoginForm = () => {
  return (
    <div className="w-[450px] h-[550px] flex flex-col items-center justify-center p-4 border-4 rounded-[30px] mt-2 bg-white shadow-lg drop-shadow-md">
      {/* logo of the SecondHandbooks */}

      {/* <!-- Email/Phone Number Input --> */}
      <input
        type="text"
        placeholder="Email or Phone Number"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md outline-none"
      />

      {/* <!-- Password Input --> */}
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md outline-none"
      />

      {/* <!-- Reset Password Link --> */}
      <a href="#" className="mb-4 text-blue-500">
        Reset Password
      </a>

      {/* <!-- Login Button --> */}
      <button className="w-full px-4 py-2 mb-4 text-white bg-[#2CD680] rounded-md">
        Login
      </button>

      {/* <!-- OR Text --> */}
      <div className="flex items-center justify-center mb-4">
        <span className="px-4 text-gray-500">OR</span>
      </div>

      {/* <!-- Signup Buttons --> */}
      <div className="flex items-center justify-center space-x-4">
        <button className="flex items-center justify-center px-4 py-2 text-white bg-[#0994FA] rounded-md">
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
          <span>Sign up with Facebook</span>
        </button>
        <button className="flex items-center justify-center px-4 py-2 text-white bg-[#FF7C1D] rounded-md">
          {/* <FontAwesomeIcon icon={faGoogleLogo} /> */}
          <span>Sign up with Google</span>
        </button>
      </div>

      {/* NOt having Account */}
      <div className="my-[20px]">
        <p className="text-left">
          Not having Account:{" "}
          <a href="#" className="text-underline font-bold">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
