import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About H4cknomous and areas of security research."
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <div className="eyebrow">About the researcher</div>
        <h1>Hi, I’m H4cknomous.</h1>
        <p>
          I’m an independent security researcher interested in how software works,
          where its assumptions break, and how those failures can be understood and
          fixed.
        </p>
      </section>
      <section className="section">
        <div className="prose">
          <h2>What I work on</h2>
          <p>
            My interests span web application security, API testing, reverse
            engineering, and offensive security tooling. I enjoy digging below the
            surface of an application, tracing how data moves through a system,
            and turning an interesting observation into a reproducible technical
            explanation.
          </p>
          <h2>How I approach research</h2>
          <p>
            I prefer evidence over assumptions. That means reading the implementation
            where possible, testing hypotheses carefully, recording what worked and
            what did not, and explaining the impact in a way that developers can act on.
          </p>
          <p>
            This site is where I collect those investigations, publish write-ups,
            and share projects built along the way.
          </p>
          <div className="callout">
            This portfolio is a work in progress. The research archive will grow as
            articles are reviewed and ready to publish.
          </div>
        </div>
      </section>
    </div>
  );
}
