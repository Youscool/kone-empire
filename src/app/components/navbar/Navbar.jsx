"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar({position}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm ${position}`}>
      <div className="container">

        {/* Logo */}
        <Link href="/" className="navbar-brand selected fw-bold fs-3">
          <Image src="/images/logos.png" width={90} height={60} alt="Logo" />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaXmark className="text-white fs-1 rotate-out" />
          ) : (
            <FaBars className="text-white fs-1 rotate-in" />
          )}
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${open ? "show-menu" : ""}`}>
          <ul className="navbar-nav ms-auto text-center gap-lg-4 mt-3 mt-lg-0">

            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link href="#aboutus" className="nav-link">À propos</Link>
            </li>

            <li className="nav-item">
              <Link href="#services" className="nav-link">Services</Link>
            </li>

            <li className="nav-item">
              <Link href="#portfolio" className="nav-link">Réalisation</Link>
            </li>

            <li className="nav-item">
              <Link href="#pricing" className="nav-link">Tarif</Link>
            </li>

            <li className="nav-item">
              <Link href="#contact" className="nav-link">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
