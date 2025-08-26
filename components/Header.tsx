"use client";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (path: string) => {
    Cookies.set("lastPage", path, { expires: 7 });
    setOpen(false);
  };

  const linkStyle = (path: string) => ({
    padding: "6px 12px",
    borderRadius: "6px",
    background:
      pathname === path ? "var(--highlight-color, #e8c76d)" : "var(--primary-color)",
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.3s ease",
  });

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "var(--secondary-color)",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ fontWeight: "bold" }}>21782127</div>

      <HamburgerMenu open={open} setOpen={setOpen}>
        <nav
          style={{
            display: open ? "flex" : "none",
            gap: "12px",
            padding: "10px 0",
          }}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/escape-room", label: "Escape Room" },
            { path: "/coding-races", label: "Coding Races" },
            { path: "/court-room", label: "Court Room" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={() => handleNavClick(path)}
              style={linkStyle(path)}
              onMouseEnter={(e) => {
                if (pathname !== path) {
                  e.currentTarget.style.background = "#e8c76d";
                  e.currentTarget.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== path) {
                  e.currentTarget.style.background = "var(--primary-color)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </HamburgerMenu>

      <ThemeToggle />
    </header>
  );
}

export default Header;