import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-brand" href="/">h4cknomous<span>.</span></Link>
          <p>Independent security research. Notes from the attack surface.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Tobsboy2" target="_blank" rel="noreferrer">GitHub ↗</a>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} H4cknomous. Built with curiosity.</p>
      </div>
    </footer>
  );
}
