"use client";
import styles from "../styles/Navbar.module.scss";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  const { width } = useWindowSize();
  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
  const pathname = usePathname();
  const [providers, setProviders] = useState(null);

  // Close the mobile menu if window width is >700
  useEffect(() => {
    if (width > 700) {
      setIsMobileMenuOn(false);
    }
  }, [width]);

  // Fetch providers for authentication (like Google)
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  // Check if the session is loading or undefined
  /*   if (!session && status === "loading") {
    return <p>Loading...</p>; // Or a loading spinner
  }
 */
  return (
    <div className={styles.navbar}>
      {/* Mobile menu toggle icon */}
      {width < 700 && (
        <FiMenu onClick={() => setIsMobileMenuOn((prev) => !prev)} />
      )}

      {/* Mobile menu dropdown */}
      {width < 700 && isMobileMenuOn && (
        <div className={styles.mobileMenu}>
          <Link className={pathname == "/" ? styles.active : ""} href="/">
            Home Page
          </Link>
          <Link
            className={pathname == "/chickens" ? styles.active : ""}
            href="/chickens"
          >
            Go to chickens
          </Link>
          <Link
            className={pathname == "/chickens/add" ? styles.active : ""}
            href="/chickens/add"
          >
            Add chickens
          </Link>
        </div>
      )}

      {/* Wide screen menu */}
      {width > 700 && (
        <div className={styles.mainMenu}>
          <Link className={pathname == "/" ? styles.active : ""} href="/">
            Home Page
          </Link>
          <Link
            className={pathname == "/chickens" ? styles.active : ""}
            href="/chickens"
          >
            Go to chickens
          </Link>
          <Link
            className={pathname == "/chickens/add" ? styles.active : ""}
            href="/chickens/add"
          >
            Add chickens
          </Link>
        </div>
      )}

      {!session &&
        providers &&
        Object.values(providers).map((provider, index) => (
          <button
            key={index}
            className={styles.title}
            onClick={() => signIn(provider.id)}
          >
            <FaGoogle />
            Log in or register
          </button>
        ))}

      {session && (
        <>
          <button onClick={() => signOut()}>Sign out</button>
          <button>Profile</button>
          <button>Messages</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
