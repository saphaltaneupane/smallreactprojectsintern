import React from "react";

const App = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.avif')" }}
    >
      {/* Card */}
      <div className="w-96 p-8 bg-white/80 rounded-2xl shadow-2xl backdrop-blur-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login with
        </h2>

        {/* Social Buttons */}
        <div className="flex justify-between gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
            <img src="/google.jpg" alt="Google" className="w-6 h-6" />
            <span className="font-medium text-gray-800">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
            <img src="/apple.png" alt="Apple" className="w-6 h-6" />
            <span className="font-medium">Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 bg-white">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <a href="#" className="text-sm text-purple-600 hover:underline self-end">
            Forgot Password?
          </a>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-transform hover:scale-105"
          >
            Log In
          </button>
        </form>

        {/* Signup link */}
        <p className="mt-4 text-gray-800 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Signup now
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
