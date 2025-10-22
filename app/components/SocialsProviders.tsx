'use client'
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

type Provider = 'github' | 'google';

const SocialsProviders = () => {

  const socialsLoginHandler = (provider : Provider) => {
    signIn(provider, {redirectTo: '/profile'});
  }

  return (
    <div className="flex gap-4">
      <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/30 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
          <BsGoogle className="text-xl" color="white"/>
          Google
      </button>

      <button onClick={() => socialsLoginHandler('github')} className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/30 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
          <FaGithub className="text-xl" />
          GitHub
      </button>
    </div>
  );
};

export default SocialsProviders;
