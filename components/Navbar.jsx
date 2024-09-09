"use client";
import styles from "../styles/Navbar.module.scss";
import React from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const Navbar = () => {
  useWindowSize();
  console.log(window.innerWidth);
  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
  return (
    <div>
      <Link href="/">Home Page</Link>
      <Link href="/chickens">Go to chickens</Link>
      <Link href="/chickens/add">Add chickens</Link>
      <button className={styles.title}>
        {" "}
        <FaGoogle />
        Log in or register
      </button>
      <button>Profile</button>

      <button>Messages</button>
    </div>
  );
};

export default Navbar;
