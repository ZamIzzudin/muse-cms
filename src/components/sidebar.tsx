/** @format */

"use client";

import { usePathname } from "next/navigation";
import style from "@style/sidebar.module.css";
import SignOutBtn from "./signOutBtn";
import Link from "next/link";
import Image from "next/image";

import { IconContext } from "react-icons";
import { FiHome } from "react-icons/fi";
import {
  RiUserFollowLine,
  RiTranslate,
  RiUploadCloud2Line,
} from "react-icons/ri";

import Logo from "@asset/logo.png";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside
      className={`${style.sidebar} ${pathname === "/signin" ? style.hide : ""}`}
    >
      <ul>
        <div className={`${style.brand_logo}`}>
          <Image src={Logo} alt="Logo Muse" width={80} height={80} />
        </div>
        <li
          className={`${pathname === "/" ? style.active : ""} ${
            style.link_item
          }`}
        >
          <Link href="/">
            <IconContext.Provider value={{ className: "icon" }}>
              <FiHome />
            </IconContext.Provider>
            Home
          </Link>
        </li>
        <li
          className={`${pathname === "/access" ? style.active : ""} ${
            style.link_item
          }`}
        >
          <Link href="/access">
            <IconContext.Provider value={{ className: "icon" }}>
              <RiUserFollowLine />
            </IconContext.Provider>
            Access
          </Link>
        </li>
        <li
          className={`${pathname === "/translate" ? style.active : ""} ${
            style.link_item
          }`}
        >
          <Link href="/translate">
            <IconContext.Provider value={{ className: "icon" }}>
              <RiTranslate />
            </IconContext.Provider>
            Translate
          </Link>
        </li>
        <li
          className={`${pathname === "/publish" ? style.active : ""} ${
            style.link_item
          }`}
        >
          <Link href="/publish">
            <IconContext.Provider value={{ className: "icon" }}>
              <RiUploadCloud2Line />
            </IconContext.Provider>
            Publish
          </Link>
        </li>
      </ul>
      <SignOutBtn />
    </aside>
  );
}
