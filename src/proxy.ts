import { NextResponse, type NextRequest } from 'next/server';
import { attachTokensToResponse } from './middleware/cookieUtils';
import { decodeEdgeToken } from './middleware/tokenUtils';
import { tryRefreshToken } from './services/auth/refreshToken';
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
  isValidRedirectForRole,
  UserRole,
} from './services/user/user-access';
import getVerifiedUser from './services/user/verified-user';

export async function proxy(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  const isAuthPage = isAuthRoute(pathname);
  const routeOwner = getRouteOwner(pathname);

  // 1) First try with current access token
  let user = await getVerifiedUser(req);
  let newAccessToken: string | null = null;
  let newRefreshToken: string | null = null;

  // 2) If access is invalid but refresh exists -> refresh once (avoid doing this on auth pages)
  // We also try refresh on '/' to allow auto-login
  if (!user && !isAuthPage && (routeOwner !== null || pathname === '/')) {
    const refreshed = await tryRefreshToken(req);

    if (refreshed?.accessToken) {
      newAccessToken = refreshed.accessToken;
      newRefreshToken = refreshed.refreshToken;

      // Use the Edge-safe decoder for the newly fetched token
      user = decodeEdgeToken(newAccessToken);
    }
  }

  const role = user?.role as UserRole | undefined;

  // Shorthand for applying cookies to any response
  const withCookies = (res: NextResponse) =>
    attachTokensToResponse(res, newAccessToken, newRefreshToken);

  // Case: Root route handles auto-dashboard or login
  if (pathname === '/') {
    if (!user) return NextResponse.redirect(new URL('/login', origin));
    return withCookies(
      NextResponse.redirect(new URL(getDefaultDashboardRoute(role!), origin)),
    );
  }

  // Case: Public auth pages (/login, /register, etc.)
  if (!user && isAuthPage) return NextResponse.next();

  // Case: Prevent logged-in users from seeing auth pages
  if (user && isAuthPage) {
    return withCookies(
      NextResponse.redirect(new URL(getDefaultDashboardRoute(role!), origin)),
    );
  }

  // Case: Protected route check
  if (!user && routeOwner !== null && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', origin));
  }

  // Case: Role access control check
  if (user && !isValidRedirectForRole(pathname, role!)) {
    return withCookies(
      NextResponse.redirect(new URL(getDefaultDashboardRoute(role!), origin)),
    );
  }

  return withCookies(NextResponse.next());
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
  ],
};
