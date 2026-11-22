import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Security tools and projects by H4cknomous."
};

const projects = [
  {
    name: "Echo Exploit Server",
    type: "Web security tooling",
    description: "A custom payload-hosting platform inspired by the exploit server workflow in web security labs. Built for controlled experiments and security testing.",
    stack: ["Web", "Payload hosting", "Security labs"],
    href: "https://github.com/Tobsboy2/Echo-exploit-server",
    linkLabel: "View repository"
  },
  {
    name: "HTTP CTF Lab",
    type: "Learning environment",
    description: "A practical environment for exploring HTTP behaviour and building repeatable web security exercises.",
    stack: ["HTTP", "Labs", "Testing"],
    href: "https://github.com/Tobsboy2",
    linkLabel: "Browse GitHub"
  },
  {
    name: "Research scripts",
    type: "Security automation",
    description: "Small utilities and scripts developed to make reconnaissance, analysis, and repetitive research tasks easier to reproduce.",
    stack: ["Python", "Linux", "Automation"],
    href: "https://github.com/Tobsboy2",
    linkLabel: "Browse GitHub"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <div className="eyebrow">Tools and experiments</div>
        <h1>Things built along the way.</h1>
        <p>
          A selection of projects, research utilities, and environments that came
          out of practical security work.
        </p>
      </section>
      <section className="section">
        <div className="grid-2">
          {projects.map((project, index) => (
            <article className="card" key={project.name}>
              <div className="card-meta"><span>{project.type}</span><span>0{index + 1}</span></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="card-foot">
                {project.stack.map((tag) => <span className="mini-tag" key={tag}>{tag}</span>)}
              </div>
              <div className="hero-actions">
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
