import { experienceContent } from '../data/resumeData.js';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Career Highlights</h2>
        <p className="section__intro">{experienceContent.intro}</p>
        <div className="timeline" role="list">
          {experienceContent.roles.map((role) => (
            <article className="timeline__item" role="listitem" key={role.title}>
              <span className="timeline__date">{role.dates}</span>
              <div className="timeline__content">
                <h3>{role.title}</h3>
                <p className="timeline__meta">{role.meta}</p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
