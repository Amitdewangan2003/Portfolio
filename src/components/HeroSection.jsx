import { useState, useEffect } from "react";

const phrases = [
  "I build things for the web",
  "React & JavaScript Developer",
  "Turning ideas into interfaces",
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((i) => i + 1);
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((i) => i - 1);
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 4}px`,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 10}s`,
    opacity: 0.2 + Math.random() * 0.4,
  }));

  return (
    <section className="hero" id="home">
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">AMIT DEWANGAN</h1>
          <p className="hero-typing">
            {text}
            <span className="cursor" />
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              download="Amit_Dewangan_Resume.pdf"
              className="btn-primary"
            >
              📄 Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              🚀 View Projects
            </a>
          </div>
        </div>

        <div className="hero-avatar" />
      </div>
    </section>
  );
}
