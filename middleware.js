import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/', '/(uk|en)/:path*', "/((?!api|_next|_vercel|.*\\..*).*)"],
};
