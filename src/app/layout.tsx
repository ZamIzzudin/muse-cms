import type { Metadata } from "next";
// import { AuthProvider } from "hooks/auth";

import { Inter } from "next/font/google";
import "@style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muse CMS",
  description: "Content Management System Muse Indonesia",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {  
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthProvider> */}
          {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
