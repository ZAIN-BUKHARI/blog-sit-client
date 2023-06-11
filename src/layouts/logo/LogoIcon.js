import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image src='/contact.png' width={100} height={100} alt="Blogger" className="mx-10" />
    </Link>
  );
};

export default LogoIcon;
