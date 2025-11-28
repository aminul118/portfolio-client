export type UserRole = 'ADMIN' | 'USER' | 'SUPER_ADMIN';
export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

const authRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
];

const commonProtectedRoutes: RouteConfig = {
  exact: ['/my-profile', '/settings'],
  patterns: [], // [/password/change-password, /password/reset-password => /password/*]
};

const superAdminProtectedRoutes: RouteConfig = {
  patterns: [/^\/doctor/], // Routes starting with /doctor/* , /assitants, /appointments/*
  exact: [], // "/assistants"
};

const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/], // Routes starting with /admin/*
  exact: [], // "/admins"
};

const userProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard/], // Routes starting with /dashboard/*
  exact: [], // "/dashboard"
};

const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => route === pathname);
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
  // if pathname === /dashboard/my-appointments => matches /^\/dashboard/ => true
};

const getRouteOwner = (
  pathname: string,
): 'ADMIN' | 'SUPER_ADMIN' | 'COMMON' | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return 'ADMIN';
  }
  if (isRouteMatches(pathname, superAdminProtectedRoutes)) {
    return 'SUPER_ADMIN';
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return 'COMMON';
  }
  return null;
};

const getDefaultDashboardRoute = (role: UserRole): string => {
  if (role === 'ADMIN') {
    return '/admin';
  }
  if (role === 'SUPER_ADMIN') {
    return '/admin';
  }
  if (role === 'USER') {
    return '/dashboard';
  }
  return '/';
};

const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole,
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === 'COMMON') {
    return true;
  }

  if (routeOwner === role) {
    return true;
  }

  return false;
};

export {
  adminProtectedRoutes,
  authRoutes,
  commonProtectedRoutes,
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
  isRouteMatches,
  isValidRedirectForRole,
  superAdminProtectedRoutes,
  userProtectedRoutes,
};
