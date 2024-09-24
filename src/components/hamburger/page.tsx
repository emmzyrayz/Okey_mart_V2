"use client";
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import './ham.css';

export const HamburgerMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {label: "Home", path: "/"},
    {label: "Contact", path: "/contact"},
    {label: "About", path: "/about"},
    {label: "Sign Up", path: "/signup"},
  ];

  return (
    <div className="hamburger-container" onClick={toggleMenu}>
      <div className={`hamburger-icon ${isOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile_menu absolute ${isOpen ? "menu-open" : "menu-closed"}`}>
        <ul className="flex flex-col w-full justify-evenly">
          {navItems.map((item, index) => (
            <li key={index} className={pathname === item.path ? "active" : ""}>
              <Link href={item.path}>
                <span>{item.label}</span>
                <hr />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};