import { auth as middleware } from "@/auth"

export default middleware((req) => {
  console.log('Middleware called for: ', req.nextUrl.pathname);
})

export const config = {
  matcher: ['/login']
}
