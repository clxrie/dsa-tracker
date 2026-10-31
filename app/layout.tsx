import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: "flex", gap: "16px" }}>
          {/*← frame, stays on every page*/}
        <Link href="/">Dashboard</Link>           
        <Link href="/problems">problems</Link>
        <Link href="/problems/new">Add Problem</Link>
        
        </nav>
        {children} {/*← page swaps in here*/}
        </body>
    </html>
  )
}