import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Research areas and technical investigations by H4cknomous."
};

const areas = [
  {
    title: "Web application security",
    description: "Application behaviour, authentication and authorization, API security, access control, caching, and business logic.",
    topics: ["Authentication", "Access control", "CORS", "Cache behaviour", "API security"]
  },
  {
    title: "Reverse engineering",
    description: "Working from observable behaviour and implementation details to understand how software and protocols fit together.",
    topics: ["Protocol analysis", "Binary inspection", "Android internals", "Static analysis"]
  },
  {
    title: "Offensive security tooling",
    description: "Small tools, scripts, and repeatable workflows developed to support security research and testing.",
    topics: ["Python", "Automation", "Research labs", "Reconnaissance"]
  }
];

export default function ResearchPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <div className="eyebrow">Research archive</div>
        <h1>Follow the details.</h1>
        <p>
          A home for technical investigations, security notes, and experiments.
          I focus on understanding why something behaves the way it does, not just
          collecting a proof of concept.
        </p>
      </section>
      <section className="section">
        <div className="grid-2">
          {areas.map((area, index) => (
            <article className="card" key={area.title}>
              <div className="card-meta"><span>Research area</span><span>0{index + 1}</span></div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="card-foot">
                {area.topics.map((topic) => <span className="mini-tag" key={topic}>{topic}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
