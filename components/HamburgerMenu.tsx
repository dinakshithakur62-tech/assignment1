"use client";
import { Dispatch, SetStateAction } from "react";

const HamburgerMenu = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        style={{
          width: "30px",
          height: "30px",
          position: "relative",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        {/* Top line */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "24px",
            height: "3px",
            background: "var(--menu-line)",
            borderRadius: "2px",
            transition: "0.3s ease",
            transform: open
              ? "translate(-50%, -50%) rotate(45deg)"
              : "translate(-50%, calc(-50% - 8px))",
          }}
        />
        {/* Middle line */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "24px",
            height: "3px",
            background: "var(--menu-line)",
            borderRadius: "2px",
            transition: "0.3s ease",
            transform: "translate(-50%, -50%)",
            opacity: open ? 0 : 1,
          }}
        />
        {/* Bottom line */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "24px",
            height: "3px",
            background: "var(--menu-line)",
            borderRadius: "2px",
            transition: "0.3s ease",
            transform: open
              ? "translate(-50%, -50%) rotate(-45deg)"
              : "translate(-50%, calc(-50% + 8px))",
          }}
        />
      </button>
      {children}
    </div>
  );
};

export default HamburgerMenu;
