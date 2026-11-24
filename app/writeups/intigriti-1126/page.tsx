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

const ARTICLE_IMAGES = [
  {
    asset: "recon-is-your-friend.gif",
    src: "/images/intigriti-1126/code-hacking.gif",
    alt: "Illustration of a hooded researcher working at a laptop with source code on screen."
  },
  {
    asset: "signature-window-vs-execution.gif",
    src: "/images/intigriti-1126/data-hex-editor.gif",
    alt: "Hex editor displaying binary data during low-level analysis."
  },
  {
    asset: "brainfuck-tape-to-stack.gif",
    src: "/images/intigriti-1126/typing-hacking.gif",
    alt: "Researcher typing at a workstation during a security investigation."
  }
] as const;

export default function Intigriti1126WriteupPage() {
  // Never render the private draft before Intigriti's official write-up window.
  if (Date.now() < releaseAt) notFound();

  const source = process.env.INTIGRITI_1126_WRITEUP;
  if (!source) notFound();

  const article = source
    .replace(
      "Illustrative animation of the recon trail. The screenshots requested below will show the actual challenge responses and terminal output.",
      "A code-focused visual accompanying the reconnaissance and initial binary inspection."
    )
    .replace(
      "The diagram shows the difference between the RSA hash window and the pointer eventually passed to the interpreter.",
      "A hex editor view accompanying the byte-level signature analysis."
    )
    .replace(
      "Conceptual view of the unchecked pointer moving out of the intended tape and into the stack region.",
      "A researcher working at a terminal during the memory-safety investigation."
    );

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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => {
                const asset = ARTICLE_IMAGES.find(
                  (item) => typeof src === "string" && src.endsWith(item.asset)
                );

                if (asset) {
                  return (
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  );
                }

                return src ? (
                  <img src={src} alt={alt || ""} loading="lazy" decoding="async" />
                ) : null;
              }
            }}
          >
            {article}
          </ReactMarkdown>
        </article>
      </section>
    </div>
  );
}
