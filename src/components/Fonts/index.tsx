import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const fontSans = localFont({
  variable: "--font-notosans",
  src: [
    {
      path: "./NotoSansKR-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NotoSansKR-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./NotoSansKR-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const fontSerif = localFont({
  variable: "--font-notoserif",
  src: [
    {
      path: "./NotoSerifKR-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NotoSerifKR-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./NotoSerifKR-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Fonts({ children }: { children: ReactNode }) {
  return (
    <main
      className={`${montSerrat.variable} ${fontSans.variable} ${fontSerif.variable} font-notosans`}
    >
      {children}
    </main>
  );
}
