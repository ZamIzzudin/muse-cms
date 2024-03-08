/** @format */

import style from "@style/sidebar.module.css";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className={style.sidebar}>
      <span>SIDEBAR</span>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/access">Access</Link>
        </li>
        <li>
          <Link href="/translate">Translate</Link>
        </li>
        <li>
          <Link href="/publish">Publish</Link>
        </li>
      </ul>
    </aside>
  );
}
