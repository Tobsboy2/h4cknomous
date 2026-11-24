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

const GIPHY_EMBEDS = [
  { asset: "recon-is-your-friend.gif", id: "OIKT61NWgV9w58RyAi" },
  { asset: "signature-window-vs-execution.gif", id: "78XCFBGOlS6keY1Bil" },
  { asset: "brainfuck-tape-to-stack.gif", id: "7FrOU9tPbgAZtxV5mb" }
] as const;

export default function Intigriti1126WriteupPage() {
  // Never render the private draft before Intigriti's official write-up window.
  if (Date.now() < releaseAt) notFound();

  const source = process.env.INTIGRITI_1126_WRITEUP;
  if (!source) notFound();

  const article = source
    .replace(
      "Illustrative animation of the recon trail. The screenshots requested below will show the actual challenge responses and terminal output.",
      "GIPHY animation by [Splunk](https://giphy.com/embed/OIKT61NWgV9w58RyAi), used as a visual break in the reconnaissance section."
    )
    .replace(
      "The diagram shows the difference between the RSA hash window and the pointer eventually passed to the interpreter.",
      "GIPHY coding animation by [Pizza Ninjas](https://giphy.com/embed/78XCFBGOlS6keY1Bil), accompanying the signature analysis."
    )
    .replace(
      "Conceptual view of the unchecked pointer moving out of the intended tape and into the stack region.",
      "GIPHY glitch animation by [xponentialdesign](https://giphy.com/embed/7FrOU9tPbgAZtxV5mb), accompanying the memory-safety discussion."
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
                const embed = GIPHY_EMBEDS.find(
                  (item) => typeof src === "string" && src.endsWith(item.asset)
                );

                if (embed) {
                  return (
                    <div
                      className="giphy-embed-wrap"
                      style={{
                        width: "100%",
                        maxWidth: 640,
                        aspectRatio: "16 / 9",
                        margin: "28px auto 14px",
                        overflow: "hidden",
                        border: "1px solid var(--line-strong)",
                        borderRadius: 10,
                        background: "#080d0f"
                      }}
                    >
                      <iframe
                        src={`https://giphy.com/embed/${embed.id}`}
                        title={alt || "GIPHY animation"}
                        loading="lazy"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          border: 0
                        }}
                      />
                    </div>
                  );
                }

                return src ? <img src={src} alt={alt || ""} loading="lazy" /> : null;
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
