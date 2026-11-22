import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Write-ups",
  description: "CTF write-ups and technical walkthroughs by H4cknomous."
};

const releaseAt = new Date("2026-11-24T00:05:00Z").getTime();

export default function WriteupsPage() {
  const isReleased = Date.now() >= releaseAt;

  return (
    <div className="container">
      <section className="page-hero">
        <div className="eyebrow">Write-ups & field notes</div>
        <h1>Show the work.</h1>
        <p>
          Detailed walkthroughs, lessons from debugging, and notes from challenges
          and security research. The goal is to explain the reasoning, not just
          reveal the final payload.
        </p>
      </section>
      <section className="section">
        {isReleased ? (
          <article className="card writeup-card">
            <div className="card-meta">
              <span>CTF / Reverse engineering</span>
              <time dateTime="2026-11-24T00:05:00Z">24 November 2026</time>
            </div>
            <h3>SuperFastServer: How I Found a Way Around Signed Code</h3>
            <p>
              A deep dive into Intigriti Challenge 1126, from binary reconnaissance
              and protocol reversing to the signature-validation logic flaw and
              the final flag disclosure.
            </p>
            <div className="card-foot">
              <span className="mini-tag">Intigriti</span>
              <span className="mini-tag">RSA</span>
              <span className="mini-tag">Reverse engineering</span>
              <span className="mini-tag">Brainfuck</span>
            </div>
            <div className="hero-actions">
              <Link className="text-link" href="/writeups/intigriti-1126">Read the write-up ↗</Link>
            </div>
          </article>
        ) : (
          <div className="empty-state">
            <strong>Next up: Intigriti Challenge 1126</strong>
            The SuperFastServer write-up is prepared and will become publicly
            accessible when Intigriti's official write-up window opens.
            <p className="release-note">
              Scheduled release: 24 November 2026 at 01:05 WAT
              <br />
              (24 November 2026 at 00:05 UTC)
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
