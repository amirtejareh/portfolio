import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["fa", "en"],
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  matcher: ["/", "/(fa|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
