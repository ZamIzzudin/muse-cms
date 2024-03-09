/** @format */

import type { Metadata } from "next";
import { AuthProvider } from "@hook/useAuth";

import { Inter } from "next/font/google";
import SideBar from "@comp/sidebar";
import Layouting from "@comp/layouting";

import "bootstrap/dist/css/bootstrap.min.css";
import "@style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muse CMS",
  description: "Content Management System Muse Indonesia",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Layouting /> */}
        <SideBar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
