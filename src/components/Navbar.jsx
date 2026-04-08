import { useState, useEffect } from 'react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (item) => {
    setMenuOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {'<AD />'}
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleNavClick(item); }}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleNavClick(item); }}>
            {item}
          </a>
        ))}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </>
  );
}
