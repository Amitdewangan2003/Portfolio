const projects = [
  {
    title: "Malware Detection Web App",
    desc: "A web application to detect malware in uploaded files. Built the complete frontend with React JS, backend with Node.js and Express, and integrated the VirusTotal API to scan files and return real-time threat analysis results.",
    tags: ["React JS", "Node.js", "Express", "VirusTotal API", "REST API"],
    github: "https://github.com/Amitdewangan2003/Malware-Detection",
    demo: "https://malware-detection-beige.vercel.app",
  },
  {
    title: "Expense Tracker",
    desc: "A feature-rich expense tracking application built with React JS and Redux Toolkit for efficient global state management. Allows users to add, categorize, and visualize their expenses with a clean and intuitive interface.",
    tags: ["React JS", "Redux Toolkit", "JavaScript", "CSS"],
    github: "https://github.com/Amitdewangan2003/Expense-Tracker",
    demo: "https://expense-tracker-eta-indol-31.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Some things I've built</p>

      <div className="projects-grid fade-in">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a
                href={p.github}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {p.demo !== "#" ? (
                <a
                  href={p.demo}
                  className="btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <button
                  className="btn-primary"
                  disabled
                  style={{ opacity: 0.5, cursor: "not-allowed" }}
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
