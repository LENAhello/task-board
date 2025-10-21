import { auth as middleware } from "@/auth"
import { NextResponse } from "next/server";


export default middleware((req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const isLoggedIn: boolean = Boolean(req.auth);

  if(path === '/login' || path === '/register' && isLoggedIn)
    return NextResponse.redirect(new URL('/profile', nextUrl));

  if(path === '/profile' && !isLoggedIn)
    return NextResponse.redirect(new URL('/login', nextUrl));

});

export const config = {
  matcher: ['/profile']
}
