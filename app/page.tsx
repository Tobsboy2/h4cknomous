import Link from "next/link";

const focusAreas = [
  {
    number: "01",
    title: "Web application security",
    description: "Breaking down authentication, authorization, API behaviour, business logic, and the small assumptions that turn into vulnerabilities.",
    tags: ["Burp Suite", "API Security", "Web"]
  },
  {
    number: "02",
    title: "Reverse engineering",
    description: "Understanding how software behaves by looking beneath the interface, from protocols and binaries to application internals.",
    tags: ["Linux", "Binary Analysis", "Protocols"]
  },
  {
    number: "03",
    title: "Offensive security tooling",
    description: "Building practical tools and lab environments that make security testing more repeatable and easier to understand.",
    tags: ["Python", "Automation", "Research"]
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Independent security research</div>
          <h1>Curiosity is the <em>attack surface.</em></h1>
          <p className="hero-copy">
            I’m H4cknomous. I investigate how applications behave, follow the details
            others overlook, and document what I learn through hands-on security research.
          </p>
          <div className="hero-meta">
            <span className="tag">Web security</span>
            <span className="tag">Reverse engineering</span>
            <span className="tag">Vulnerability research</span>
            <span className="tag">Security tooling</span>
          </div>
          <div className="hero-actions">
            <Link className="button" href="/research">Explore research <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/about">A little about me</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">What I spend time on</div>
              <h2>Areas of focus</h2>
            </div>
            <Link className="text-link" href="/research">Browse research ↗</Link>
          </div>
          <div className="grid-3">
            {focusAreas.map((area) => (
              <article className="card" key={area.number}>
                <div className="card-meta"><span>{area.number} / Focus</span><span>✳</span></div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="card-foot">
                  {area.tags.map((tag) => <span className="mini-tag" key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Selected work</div>
              <h2>Research notes, tools, and experiments</h2>
            </div>
            <Link className="text-link" href="/projects">View projects ↗</Link>
          </div>
          <article className="card feature-card">
            <div>
              <div className="card-meta"><span>Personal project</span><span>Security tooling</span></div>
              <h3>Echo Exploit Server</h3>
              <p>
                A custom payload-hosting and testing platform inspired by the exploit
                server workflow used in web security labs. Built to support practical
                experiments and controlled security testing.
              </p>
              <div className="card-foot">
                <span className="mini-tag">Web security</span>
                <span className="mini-tag">Tooling</span>
              </div>
              <div className="hero-actions">
                <a className="text-link" href="https://github.com/Tobsboy2/Echo-exploit-server" target="_blank" rel="noreferrer">Explore source code ↗</a>
                <Link className="text-link" href="/projects">More projects ↗</Link>
              </div>
            </div>
            <div className="feature-aside" aria-hidden="true">
              <div className="terminal-box">
                <div><span className="prompt">h4cknomous@lab</span>:~$ whoami</div>
                <div>security researcher</div>
                <div><span className="prompt">h4cknomous@lab</span>:~$ ls research/</div>
                <div>web/ reverse/ tooling/</div>
                <div><span className="prompt">h4cknomous@lab</span>:~$ <span className="accent">_</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Writing and documentation</div>
              <h2>Notes from the process</h2>
            </div>
            <Link className="text-link" href="/writeups">Visit write-ups ↗</Link>
          </div>
          <div className="empty-state">
            <strong>The research archive is taking shape.</strong>
            New write-ups and technical notes will appear here as they are ready to publish.
          </div>
        </div>
      </section>
    </>
  );
}
