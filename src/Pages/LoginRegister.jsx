import React from "react";

const LoginRegister = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96 max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register Now!</h1>

        <input
          type="text"
          className="input mb-4 w-full"
          name="fullname"
          placeholder="Full Name"
        />

        <input
          type="text"
          className="input mb-4 w-full"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          className="input mb-4 w-full"
          name="password"
          placeholder="Password"
        />

        <input
          type="password"
          className="input mb-4 w-full"
          name="confirm_password"
          placeholder="Confirm Password"
        />

        <div className="flex justify-center">
          <button className="bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2">
            Create Account
          </button>
        </div>

        <div className="text-sm text-gray-500 mt-4">
          By signing up, you agree to the
          <a className="underline text-blue-500" href="/terms-of-service">
            Terms of Service
          </a>{" "}
          and
          <a className="underline text-blue-500" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>

        <div className="text-gray-700 mt-6 text-center">
          Already have an account?
          <a className="underline text-blue-500" href="../login/">
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
