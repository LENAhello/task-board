import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/boards", label: "Boards" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
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
                    <Button variant="outline" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                </div>
            </div>
      </nav>

    )
};

export default Navbar;
