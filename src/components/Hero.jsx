import { heroContent } from '../data/resumeData.js';

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">{heroContent.eyebrow}</p>
          <h1>{heroContent.title}</h1>
          <p className="hero__lead">{heroContent.lead}</p>
          <div className="hero__cta">
            <a className="btn" href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </a>
            <a className="btn btn--ghost" href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero__details" aria-label="Professional snapshot">
          <div className="detail-card">
            <h2>Key Facts</h2>
            <ul>
              {heroContent.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
