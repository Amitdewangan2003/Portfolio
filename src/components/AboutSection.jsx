export default function AboutSection() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me better</p>

      <div className="about-grid fade-in">
        <div className="code-card">
          <div className="code-dots">
            <span />
            <span />
            <span />
          </div>
          <pre style={{ margin: 0 }}>
            <span className="code-keyword">const</span>{" "}
            <span className="code-var">amit</span>{" "}
            <span className="code-bracket">= {"{"}</span>
            {"\n"}
            {"  "}
            <span className="code-var">role</span>:{" "}
            <span className="code-string">"Frontend Developer"</span>,{"\n"}
            {"  "}
            <span className="code-var">education</span>:{" "}
            <span className="code-string">"BCA Graduate"</span>,{"\n"}
            {"  "}
            <span className="code-var">coffee</span>:{" "}
            <span className="code-bool">true</span>,{"\n"}
            {"  "}
            <span className="code-var">skills</span>:{" "}
            <span className="code-bracket">[</span>
            <span className="code-string">"JS"</span>,{" "}
            <span className="code-string">"React"</span>,{" "}
            <span className="code-string">"Node"</span>
            <span className="code-bracket">]</span>,{"\n"}
            <span className="code-bracket">{"}"}</span>;
          </pre>
        </div>

        <div>
          <p className="about-text">
            BCA graduate with a passion for frontend development. I love
            building clean, fast, and user-friendly web applications using
            React, JavaScript, and modern web technologies.
          </p>
        </div>
      </div>

      <div className="stats-grid fade-in">
        <div className="stat-card">
          <div className="stat-number">2+</div>
          <div className="stat-label">Projects Built</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">∞</div>
          <div className="stat-label">Always Learning</div>
        </div>
      </div>
    </section>
  );
}
