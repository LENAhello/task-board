'use client'
import { loginAction } from "@/app/actions/actions";
import Alert from "@/app/components/Alert";
import Loading from "@/app/components/Loading";
import { LoginSchema } from "@/app/utils/validationSchemas";
import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa'


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [clientErrors, setClientErrors] = useState('');
    const [serverErrors, setServerErrors] = useState('');
    const [serverSuccess, setServerSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validation = LoginSchema.safeParse({ email, password });
        if (!validation.success) {
            const messages = validation.error.issues[0].message;
            return setClientErrors(validation.error.issues[0].message);
        }

        loginAction({email, password}).then((result) => {
            if (result?.error) setServerErrors(result.error);
            if (result?.success) setServerSuccess(result.success);
        });

        setEmail('');
        setPassword('');
        setClientErrors('');
        setServerErrors('');
        setServerSuccess('');
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
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                {loading ? <Loading/> : 'Log in'}
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
