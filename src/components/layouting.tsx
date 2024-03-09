/** @format */

"use client";

import { usePathname } from "next/navigation";
import { authConfig } from "@util/auth";
import { getServerSession } from "next-auth";
import SideBar from "./sidebar";

export default async function Layouting() {
  const pathname = usePathname();
  const session = await getServerSession(authConfig);

  if (session && pathname !== "/signin") {
    return <SideBar />;
  } else {
    return null;
  }
}
