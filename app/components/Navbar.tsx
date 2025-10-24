import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/boards", label: "Boards" },
  { href: "/about", label: "About" },
];

const Navbar = async () => {

    const session = await auth();
    console.log(session);
    return (

        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                {/* Logo / Brand */}
                <Link href="/" className="text-xl font-bold text-blue-600">
                    TaskBoard
                </Link>
        
                {/* Navigation Links */}
                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                            link.href === '/boards' ? "text-blue-600" : "text-gray-600"
                        }`}
                    >
                        {link.label}
                    </Link>
                    ))}
                </div>
        
                {/* Right Side (Login/Profile) */}
                <div>
                {session ? 
                    <Link
                        href="/profile"
                        className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                        {session.user.name}
                    </Link> : 
                    <Link
                        href="/login"
                        className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                        Login
                    </Link>
                }
                </div>

            </div>
      </nav>

    )
};

export default Navbar;
