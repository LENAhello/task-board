'use client'
import { registerAction } from "@/app/actions/actions";
import Alert from "@/app/components/Alert";
import Loading from "@/app/components/Loading";
import { RegisterSchema } from "@/app/utils/validationSchemas";
import React, { useState } from "react";

const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [clientErrors, setClientErrors] = useState('');
  const [serverErrors, setServerErrors] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const validation = RegisterSchema.safeParse({ username, email, password });
    if (!validation.success) {
      const messages = validation.error.issues[0].message;
      return setClientErrors(messages);
    }
    setLoading(true);
    registerAction({username, email, password}).then((result) => {
      
      if(result.success) {
        setUsername('');
        setEmail('');
        setPassword('');
    
        setClientErrors('');
        setServerErrors('');
        setServerSuccess(result.message);
      }

      if(!result.success) setServerErrors(result.message);
      
    });
    
    setLoading(false);
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
        <input 
          type="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Anna Rollas"
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="anna.rollas@example.com"
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
        className="w-full bg-white/80 text-blue-800 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
      >
        {loading ? <Loading title='Registering user...'/> : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;
