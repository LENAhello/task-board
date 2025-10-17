import React from "react";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
        <input 
          type="username"
          name="username"
          placeholder="anna.rollas@example.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email"
          name="email"
          placeholder="anna.rollas@example.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input 
          type="password"
          name="password"
          placeholder="••••••••"
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-white/80 text-blue-800 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
      >
        Log in
      </button>
    </form>
  );
};

export default RegisterForm;
