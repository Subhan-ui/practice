import React from "react";
import Image from "next/image";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.nav}>
      <Image
        src="/asset/logo.png"
        className={classes.logo}
        alt="this is some image"
        height={30}
        width={30}
      />
      <ul>
        <li>Overview</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <div className={classes.right}>
        <button>Upgrade</button>
        <Image
          src="/asset/image.png"
          className={classes.img}
          alt="this is some image"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};
