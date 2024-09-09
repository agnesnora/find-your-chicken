import React from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home Page</Link>
      <Link href="/chickens">Go to chickens</Link>
      <Link href="/chickens/add">Add chickens</Link>
      <button>
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
