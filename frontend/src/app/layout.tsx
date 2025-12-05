import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import type { ReactNode } from "react";
import { SolanaWalletProvider } from "@/components/WalletProvider";

export const metadata: Metadata = {
  title: "degen4good",
  description:
    "If you're gonna degen anyway, at least some good comes out of it.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SolanaWalletProvider>
          <Navbar />
          <div className="main-container">{children}</div>
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
