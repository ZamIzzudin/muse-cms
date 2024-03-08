/** @format */

import type { Metadata } from "next";
import { AuthProvider } from "@hook/useAuth";
import { getServerSession } from "next-auth";
import { authConfig } from "@util/auth";

import SideBar from "@comp/sidebar";

import { Inter } from "next/font/google";
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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
