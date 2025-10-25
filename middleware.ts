import { auth as middleware } from "@/auth"
import { NextResponse } from "next/server";

const authRoutes = ['/login', '/register', '/reset-password', '/forgot-password'];
const protectedRoutes = ['/profile', '/boards']
export default middleware((req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const isLoggedIn: boolean = Boolean(req.auth);

  if(authRoutes.includes(path) && isLoggedIn)
    return NextResponse.redirect(new URL('/profile', nextUrl));

  if(protectedRoutes.includes(path) && !isLoggedIn)
    return NextResponse.redirect(new URL('/login', nextUrl));

  return NextResponse.next();

});

// The middleware will run when the user visits ['/profile', '/boards', '/login', '/register']
export const config = {
  matcher: ['/profile', '/boards', '/login', '/register', '/reset-password', '/forgot-password']
}
