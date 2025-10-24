import { auth as middleware } from "@/auth"
import { NextResponse } from "next/server";


export default middleware((req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const isLoggedIn: boolean = Boolean(req.auth);

  if((path === '/login' || path === '/register') && isLoggedIn)
    return NextResponse.redirect(new URL('/profile', nextUrl));

  if((path === '/profile' || path === '/boards') && !isLoggedIn)
    return NextResponse.redirect(new URL('/login', nextUrl));

  return NextResponse.next();

});

// The middleware will run when the user visits ['/profile', '/boards', '/login', '/register']
export const config = {
  matcher: ['/profile', '/boards', '/login', '/register']
}
