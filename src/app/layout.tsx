import "@/scss/main.scss";

import type { Metadata } from "next";

import { montserrat, plusJakartaSans, spaceGrotesk } from "@/components/fonts";
import { NextProgressBar } from "@/components/loader";
import { Footer } from "@/components/partials/footer";
import { Header } from "@/components/partials/navbar";
import { default as SessionWrapper } from "@/components/session/wrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${montserrat.className} ${spaceGrotesk.className}`}
      >
        <NextProgressBar />
        <Header isDark={false} />
        <SessionWrapper>
          <main className="pt-20 bg-success-200 min-h-screen">{children}</main>
        </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}
