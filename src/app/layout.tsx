import "./globals.css";
import localFont from "next/font/local";
import { Rubik, Lobster_Two, Moul } from "next/font/google";
import MessagesProvider from "./[locale]/MessageProvider";
import { useLocale } from "next-intl";

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const lobsterTwo = Lobster_Two({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-lobster-two",
});

const moul = Moul({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-moul",
});

const peyda = localFont({
  src: [
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Peyda/PeydaFaNum-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  return (
    <html
      suppressHydrationWarning={true}
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={`${peyda.variable} ${rubik.variable}  ${lobsterTwo.variable} ${moul.variable}`}
    >
      <MessagesProvider locale={locale}>
        <body>{children}</body>
      </MessagesProvider>
    </html>
  );
}
