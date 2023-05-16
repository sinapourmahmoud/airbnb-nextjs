"use client";

import Nav from "@/components/navbar/Nav";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import Context from "@/context/ToogleContext";

const metaFont = Nunito({
  subsets: ["latin"],
});
export const metadata = {
  title: "Airbnb-clone",
  description: "Wellcome to Airbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={metaFont.className}>
        <Context>
          <>
            <Nav />
            <div>{children}</div>
          </>
        </Context>
      </body>
    </html>
  );
}
