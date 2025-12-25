// middleware.ts (or where proxy is)
import { NextResponse, type NextRequest } from 'next/server';

import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
  isValidRedirectForRole,
  UserRole,
} from './services/auth/user-access';
import getVerifiedUser from './services/auth/verified-user';

export const proxy = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;
  const user = await getVerifiedUser(req); // <-- pass req here
  const role = user?.role as UserRole | undefined;

  const isAuthPage = isAuthRoute(pathname);
  const routeOwner = getRouteOwner(pathname);

  // NOT logged in → allow auth pages
  if (!user && isAuthPage) return NextResponse.next();

  // Logged-in user → redirect away from auth pages
  if (user && isAuthPage) {
    const defaultRoute = getDefaultDashboardRoute(role!);
    return NextResponse.redirect(new URL(defaultRoute, origin));
  }

  // Not logged-in → protected route → redirect to login
  if (!user && routeOwner !== null) {
    const loginUrl = new URL('/login', origin);
    loginUrl.searchParams.set('redirect', pathname);

    // If you want to delete cookies when token invalid, build a response and clear cookies:
    const res = NextResponse.redirect(loginUrl);
    // res.cookies.set({ name: 'accessToken', value: '', expires: new Date(0) }); // example if desired
    return res;
  }

  // Logged-in → check role access
  if (user && !isValidRedirectForRole(pathname, role!)) {
    const defaultRoute = getDefaultDashboardRoute(role!);
    return NextResponse.redirect(new URL(defaultRoute, origin));
  }

  return NextResponse.next();
};
