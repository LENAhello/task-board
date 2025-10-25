'use client'

import { forgotPasswordAction } from "@/app/actions/password.actions";
import Alert from "@/app/components/Alert";
import Loading from "@/app/components/Loading";
import { ForgotPasswordSchema } from "@/app/utils/validationSchemas";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPasswordForm = () => {

    const [email, setEmail] = useState('');

    const [clientErrors, setClientErrors] = useState('');
    const [serverErrors, setServerErrors] = useState('');
    const [serverSuccess, setServerSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const validation = ForgotPasswordSchema.safeParse({ email });
      if (!validation.success) {
        const messages = validation.error.issues[0].message;
        return setClientErrors(messages);
      } 

      setLoading(true);
      forgotPasswordAction({email}).then(result => {
        if(result.success) {
          setClientErrors('');
          setServerErrors('');
          setServerSuccess(result.message);
          setEmail('');
        }

        if(!result.success) {
          setServerErrors(result.message);
          setServerSuccess('');
        }

        setLoading(false);
      }).catch(() => setServerErrors('Something went wrong'));

      console.log({ email })
      setClientErrors('')
    }
    return(
        <>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="anna.rollas@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
            </div>

            <div className={`transition-all duration-300 ${clientErrors || serverErrors || serverSuccess ? 'visible' : 'invisible'}`}>
                { serverSuccess ? 
                    <Alert type='success' message={serverSuccess} /> : 
                    <Alert type='error' message={clientErrors || serverErrors} />
                }
            </div>
            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white/80 text-blue-800 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {loading ? <Loading title='Sending email ...'/> : 'Send email'}
            </button>
        </form>
        </>
    );
};

export default ForgotPasswordForm;
