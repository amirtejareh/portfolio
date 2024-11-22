import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import QueryProvider from "@/providers/react-query-provider";

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const peyda = localFont({
  src: [
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Peyda/PeydaFaNum-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
      className={`${peyda.variable} ${rubik.variable}`}
    >
      <body>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
