import { expertiseContent } from '../data/resumeData.js';

function Expertise() {
  return (
    <section id="expertise" className="section section--alt">
      <div className="container">
        <h2>Core Expertise</h2>
        <p className="section__intro">{expertiseContent.intro}</p>
        <div className="pill-grid" role="list">
          {expertiseContent.items.map((item) => (
            <span role="listitem" className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
