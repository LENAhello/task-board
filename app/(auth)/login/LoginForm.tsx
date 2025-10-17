import React from "react";
import { BsGoogle } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa'

const LoginForm = () => {
  return(
    <>
    <form className="space-y-4">
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

        {/* Divider */}
    <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-3 text-sm text-white/70">or continue with</span>
        <div className="flex-1 h-px bg-white/30"></div>
    </div>

    {/* Social Buttons */}
    <div className="flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/30 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
            <BsGoogle className="text-xl" color="white"/>
            Google
        </button>

        <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/30 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
            <FaGithub className="text-xl" />
            GitHub
        </button>
    </div>
    </>
  );
};

export default LoginForm;
