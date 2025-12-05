"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/markets", label: "Markets" },
  { href: "/dashboard", label: "Impact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(15,23,42,0.9)",
        background:
          "linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(15,23,42,0.4))",
      }}
    >
      <div
        className="main-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "0.85rem",
          paddingBottom: "0.85rem",
        }}
      >
        <Link href="/" style={{ fontWeight: 700, fontSize: "1rem" }}>
          degen<span style={{ color: "#22c55e" }}>4</span>good
        </Link>

        <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem" }}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: 999,
                  border: active ? "1px solid #22c55e" : "1px solid transparent",
                  backgroundColor: active ? "rgba(34,197,94,0.15)" : "transparent",
                  color: active ? "#f9fafb" : "#e5e7eb",
                  fontWeight: active ? 600 : 500,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
