"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setShow(true);
      return;
    }

    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(pageHeight - window.innerHeight, 0);
      const threshold = Math.min(window.innerHeight * 0.8, Math.max(maxScroll - 8, 0));

      setShow(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navTone = pathname === "/" && !show ? "nav-light" : "nav-dark";

  return (
    <nav className={`nav ${show ? "visible" : ""} ${navTone}`}>
      <Link href="/#landing">J Gallery Art</Link>
      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/artwork">Artwork</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
