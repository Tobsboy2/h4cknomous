import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "H4cknomous | Security Research",
    template: "%s | H4cknomous"
  },
  description:
    "Independent security research, vulnerability analysis, reverse engineering, and technical write-ups by H4cknomous.",
  metadataBase: new URL("https://h4cknomous.vercel.app"),
  openGraph: {
    title: "H4cknomous | Security Research",
    description:
      "Security research, vulnerability analysis, reverse engineering, and technical write-ups.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
