import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers"; // added
import ContextProvider from "@/context";

export const metadata: Metadata = {
  title: "Frog Soup | CAFE",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = await headers().then((h) => h.get("cookie"));

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>
          <NavBar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
