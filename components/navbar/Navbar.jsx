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
    <div className='md:mx-auto font-serif md:max-w-[1366px]  md:px-[60px]  md:justify-between md:flex h-[100px]'>
      <Link href="/" className='  md:text-[40px] text-[22px] font-bold '>
        Blog<span className="text-green-400 font-serif" >ger</span>
      </Link>
      <div className='flex md:text-[22px] text-[15px] items-center mb-[100px] md:mb-[0px] mt-[30px]  justify-stretch mx-10'>
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <div className=" ">
          <Link key={link.id} href={link.url} className={styles.un}>
            {link.title}
          </Link>
          </div>
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
