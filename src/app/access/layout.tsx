/** @format */

import SideBar from "@comp/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  );
}
