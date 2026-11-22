import Link from "next/link";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/writeups", label: "Write-ups" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="H4cknomous home">
          <span className="brand-mark">h<span>4</span></span>
          <span className="brand-name">cknomous<span className="accent">.</span></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-contact" href="/contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
