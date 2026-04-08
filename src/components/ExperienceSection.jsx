import { useEffect, useRef } from 'react';

const entries = [
  {
    title: 'BCA — Bachelor of Computer Applications',
    subtitle: 'Graduate',
    desc: 'BCA graduate with a strong foundation in computer science fundamentals, web technologies, and software development. Focused on building real-world projects throughout my degree.',
  },
  {
    title: 'Frontend Development',
    subtitle: 'Self-taught · 1 Year Experience',
    desc: 'Learned React, Redux Toolkit, REST APIs and built multiple projects from scratch. Consistently sharpened practical skills beyond academics through hands-on development.',
  },
  {
    title: 'Final Year Project — Malware Detection Web App',
    subtitle: 'React JS + Node.js + Express + VirusTotal API',
    desc: 'Built a full-stack malware detection web app — complete frontend in React JS, backend with Node.js and Express, integrated the VirusTotal API to scan uploaded files and deliver real-time threat analysis.',
  },
];

export default function ExperienceSection() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (items) => items.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.3 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My journey so far</p>

      <div className="timeline fade-in">
        {entries.map((e, i) => (
          <div
            key={i}
            className="timeline-entry"
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="timeline-dot" />
            <h3 className="timeline-title">{e.title}</h3>
            <p className="timeline-subtitle">{e.subtitle}</p>
            <p className="timeline-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
