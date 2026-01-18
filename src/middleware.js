import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');
  const { pathname } = request.nextUrl;


  if (isLoggedIn && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }



  return NextResponse.next();
}

// Config defines which routes this middleware runs on
export const config = {
  matcher: ['/login', '/'], 
};