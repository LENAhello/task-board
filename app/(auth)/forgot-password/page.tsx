import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

const page = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Forgot your password?
        </h1>

        <p className="text-center text-sm text-white/80 mb-8">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>

        <ForgotPasswordForm />

        <div className="mt-6 text-center text-sm">
          <a
            href="/login"
            className="text-pink-200 hover:text-pink-100 transition-all duration-300 underline underline-offset-4"
          >
            Back to Login
          </a>
        </div>
      </div>
    </section>

  );
};

export default page;
