import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact H4cknomous and find my public research profiles."
};

const links = [
  {
    title: "Email",
    eyebrow: "Research and collaboration",
    description: "For research discussions, responsible disclosure follow-ups, or collaboration.",
    href: "mailto:h4cknomous@gmail.com",
    label: "h4cknomous@gmail.com",
    external: false
  },
  {
    title: "GitHub",
    eyebrow: "Code and projects",
    description: "Browse repositories, tools, experiments, and ongoing work.",
    href: "https://github.com/Tobsboy2",
    label: "github.com/Tobsboy2",
    external: true
  },
  {
    title: "X",
    eyebrow: "Notes and updates",
    description: "Follow my security research notes and occasional updates.",
    href: "https://x.com/H4cknomous",
    label: "x.com/H4cknomous",
    external: true
  },
  {
    title: "Intigriti",
    eyebrow: "Vulnerability research",
    description: "Find me on Intigriti. I am building my disclosure work on the platform.",
    href: "https://app.intigriti.com/profile/h4cknomous",
    label: "Visit Intigriti",
    external: true
  }
];

export default function ContactPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <div className="eyebrow">Contact</div>
        <h1>Let’s talk security.</h1>
        <p>
          For research discussions, responsible disclosure follow-ups, collaboration,
          or questions about a project, reach out through one of the channels below.
        </p>
      </section>
      <section className="section">
        <div className="grid-2">
          {links.map((item) => {
            const content = (
              <>
                <div className="card-meta">
                  <span>{item.eyebrow}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-foot">
                  <span className="mini-tag">{item.label}</span>
                </div>
              </>
            );

            return item.external ? (
              <a
                className="card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.title}
              >
                {content}
              </a>
            ) : (
              <a className="card" href={item.href} key={item.title}>
                {content}
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
