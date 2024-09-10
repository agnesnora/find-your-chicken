"use client";
import styles from "../styles/Navbar.module.scss";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);

  //Close the mobile menu if window width is >700

  useEffect(() => {
    if (width > 700) {
      setIsMobileMenuOn(false);
    }
  }, [width]);

  return (
    <div className={styles.navbar}>
      {/* Mobile menu toggle icon*/}
      {width < 700 && (
        <FiMenu onClick={() => setIsMobileMenuOn((prev) => !prev)} />
      )}
      {/* Mobile menu dropdown */}

      {width < 700 && isMobileMenuOn && (
        <div className={styles.mobileMenu}>
          {" "}
          <Link href="/">Home Page</Link>
          <Link href="/chickens">Go to chickens</Link>
          <Link href="/chickens/add">Add chickens</Link>
        </div>
      )}
      {/* Wide screen menu */}

      {width > 700 && (
        <div className={styles.mainMenu}>
          {" "}
          <Link href="/">Home Page</Link>
          <Link href="/chickens">Go to chickens</Link>
          <Link href="/chickens/add">Add chickens</Link>
        </div>
      )}

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
