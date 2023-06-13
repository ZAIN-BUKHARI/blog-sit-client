"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  // {
  //   id: 2,
  //   title: "Portfolio",
  //   url: "/portfolio",
  // },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Post",
    url: "/dashboard",
  },
];

const Navbar = () => {
  // const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Blog<span className="text-green-400" >ger</span>
      </Link>
      <div className={styles.links}>
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && ( */}
          {/* <button className={styles.logout}>
            Logout
          </button> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
