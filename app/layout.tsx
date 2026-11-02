import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DSA Tracker",
  description: "Track my LeetCode problems, solutions, and notes in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          {/* frame: stays on every page */}
          <aside className="sidebar">
            <p className="logo">&gt; dsa_tracker</p>
            <nav className="nav">
              <Link href="/">Dashboard</Link>
              <Link href="/problems">Problems</Link>
              <Link href="/problems/new">+ Add problem</Link>
            </nav>
          </aside>

          {/* page swaps in here */}
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
