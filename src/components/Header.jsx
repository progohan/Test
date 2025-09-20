import { useState } from 'react';
import { navigationLinks } from '../data/resumeData.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <a className="logo" href="#top" onClick={closeNav}>
          EFO
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <button
            className={`nav-toggle${isOpen ? ' is-open' : ''}`}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={toggleNav}
            type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            id="primary-navigation"
            className={`nav-list${isOpen ? ' is-open' : ''}`}
          >
            {navigationLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeNav}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
