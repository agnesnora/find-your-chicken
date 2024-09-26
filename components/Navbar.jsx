"use client";
import styles from "../styles/Navbar.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import useWindowSize from "@/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const profileImage = session?.user?.image;

  const { width } = useWindowSize();
  const pathname = usePathname();
  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Close the mobile menu if window width is >700
  useEffect(() => {
    if (width > 700) {
      setIsMobileMenuOn(false);
    }
  }, [width]);

  // Fetch providers for authentication (like Google)
  useEffect(() => {
    const setAuthProviders = async () => {
      try {
        const res = await getProviders();
        setProviders(res);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };
    setAuthProviders();
  }, []);

  // Handle mobile menu link clicks and close the menu
  const handleMobileLinkClick = () => {
    setIsMobileMenuOn(false);
  };

  // If session is loading, show a loading message
  if (status === "loading") {
    return <p>Loading...</p>; // Or a loading spinner
  }

  return (
    <div className={styles.navbar}>
      {/* Mobile menu toggle icon */}
      {width < 700 && (
        <FiMenu onClick={() => setIsMobileMenuOn((prev) => !prev)} />
      )}

      {/* Mobile menu dropdown */}
      {width < 700 && isMobileMenuOn && (
        <div className={styles.mobileMenu}>
          <Link
            className={pathname == "/" ? styles.active : ""}
            href="/"
            onClick={handleMobileLinkClick}
          >
            Home Page
          </Link>
          <Link
            className={pathname == "/chickens" ? styles.active : ""}
            href="/chickens"
            onClick={handleMobileLinkClick}
          >
            Go to chickens
          </Link>
          <Link
            className={pathname == "/chickens/add" ? styles.active : ""}
            href="/chickens/add"
            onClick={handleMobileLinkClick}
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
          {session && (
            <Link
              className={pathname == "/chickens/add" ? styles.active : ""}
              href="/chickens/add"
            >
              Add chickens
            </Link>
          )}
        </div>
      )}

      {!session && providers
        ? Object.values(providers).map((provider, index) => (
            <button
              key={index}
              className={styles.title}
              onClick={() => signIn(provider.id)}
            >
              <FaGoogle />
              Log in or register
            </button>
          ))
        : providers === null && <p>Loading login options...</p>}

      {session && (
        <div className={styles.userActions}>
          <button onClick={() => signOut()}>Sign out</button>
          <button onClick={() => setIsProfileMenuOpen((prev) => !prev)}>
            <Image
              src={profileImage}
              width={50}
              height={50}
              alt="profileimage"
            />
          </button>

          <button>Messages</button>
        </div>
      )}
      {isProfileMenuOpen && (
        <div>
          <Link
            href="/profile"
            onClick={() => {
              setIsProfileMenuOpen(false);
            }}
          >
            Your Profile
          </Link>
          <Link
            href="/properties/saved"
            onClick={() => {
              setIsProfileMenuOpen(false);
            }}
          >
            Saved Properties
          </Link>
          <button
            onClick={() => {
              setIsProfileMenuOpen(false);
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
