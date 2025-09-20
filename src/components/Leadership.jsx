import { leadershipContent } from '../data/resumeData.js';

function Leadership() {
  return (
    <section id="approach" className="section section--alt">
      <div className="container approach">
        <div>
          <h2>{leadershipContent.title}</h2>
          <p>{leadershipContent.description}</p>
          <ul className="checklist">
            {leadershipContent.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
        <aside className="approach__aside">
          <h3>{leadershipContent.outcomesTitle}</h3>
          <ul>
            {leadershipContent.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Leadership;
