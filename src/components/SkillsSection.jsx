import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML / CSS", icon: "🌐", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 85 },
  { name: "React JS", icon: "⚛️", level: 80 },
  { name: "Tailwind CSS", icon: "", level: 70 },
  { name: "Git & GitHub", icon: "🔀", level: 75 },
  { name: "Responsive Design", icon: "📱", level: 85 },
  { name: "Problem Solving", icon: "🧩", level: 80 },
];

export default function SkillsSection() {
  const gridRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 },
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-grid fade-in" ref={gridRef}>
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="skill-header">
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </div>
            <div className="progress-bar">
              <div
                className={`progress-fill ${animate ? "animate" : ""}`}
                style={{ width: animate ? `${s.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
