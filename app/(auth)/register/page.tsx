import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {

  return(
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8 text-white">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign in to your account
        </h1>
        <RegisterForm/>
        <p className="text-center text-sm mt-6 text-white/80">
          Already have an account?{" "}
          <Link href="/login" className="underline text-white hover:text-pink-300">
            Log in
          </Link>
        </p>
      </div>

    </section>
  );
};

export default RegisterPage;
