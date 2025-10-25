'use client'
import { resetPasswordAction } from "@/app/actions/password.actions";
import Alert from "@/app/components/Alert";
import Loading from "@/app/components/Loading";
import { ResetPasswordSchema } from "@/app/utils/validationSchemas";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";


const ResetPasswordForm = () => {

  const params = useSearchParams();
  const token = params.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [clientErrors, setClientErrors] = useState('');
  const [serverErrors, setServerErrors] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const validation = ResetPasswordSchema.safeParse({ newPassword });
    if (!validation.success) {
      const messages = validation.error.issues[0].message;
      return setClientErrors(messages);
    }
    if (newPassword !== confirmPassword) {
      return setClientErrors('Password do not match!');
    }
    if (!token) {  
      return setClientErrors('No token provided');
    }

    setLoading(true);
    resetPasswordAction({newPassword}, token).then((result) => {
      if (!result.success){
        setClientErrors('');
        setServerErrors(result.message);
        setServerSuccess('');

        setNewPassword('');
        setConfirmPassword('');
      } else {
        setServerSuccess(result.message);
      }

      
      setLoading(false);
    }).catch(() => {
      setLoading(false);
      setServerErrors('Something went wrong')
    });
    } 
  return(
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={loading}
            />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
            <input 
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {loading ? <Loading title='Creating New Password ...'/> : 'Create New Password'}
        </button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
