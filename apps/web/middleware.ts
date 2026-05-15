import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/landing',
  '/pricing',
  '/about',
  '/tutors',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/mock/(.*)',
  '/api/health',
]);

const isProtectedRoute = createRouteMatcher([
  '/student/(.*)',
  '/tutor/(.*)',
  '/admin/(.*)',
  '/super-admin/(.*)',
  '/role-select',
  '/',
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }
  if (isProtectedRoute(req)) {
    auth().protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
