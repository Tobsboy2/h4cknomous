import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function generateMetadata(): Promise<Metadata> {
  const released = Date.now() >= new Date("2026-11-24T00:05:00Z").getTime();

  return released
    ? {
        title: "SuperFastServer: How I Found a Way Around Signed Code",
        description:
          "A technical walkthrough of Intigriti Challenge 1126, including binary reconnaissance, RSA signature verification, protocol analysis, and the final flag disclosure."
      }
    : {
        title: "Write-up scheduled",
        description: "This write-up will be available after the official challenge window closes."
      };
}

const releaseAt = new Date("2026-11-24T00:05:00Z").getTime();

export default function Intigriti1126WriteupPage() {
  // Never render the private draft before Intigriti's official write-up window.
  if (Date.now() < releaseAt) notFound();

  const source = process.env.INTIGRITI_1126_WRITEUP;
  if (!source) notFound();

  return (
    <div className="container">
      <section className="page-hero article-hero">
        <div className="eyebrow">Intigriti November Challenge 1126</div>
        <h1>SuperFastServer: How I Found a Way Around Signed Code</h1>
        <p>
          A challenge that started with a simple recon hint and ended with a
          signature check that verified one region of memory while the interpreter
          ran another.
        </p>
        <div className="article-meta">
          <span>By H4cknomous</span>
          <span>24 November 2026</span>
          <span>12 minute read</span>
          <span>Reverse engineering · CTF</span>
        </div>
      </section>
      <section className="section article-section">
        <article className="prose article-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
        </article>
      </section>
    </div>
  );
}
