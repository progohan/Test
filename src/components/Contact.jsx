import { contactContent } from '../data/resumeData.js';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>{contactContent.title}</h2>
        <p>{contactContent.message}</p>
        <a className="btn" href={contactContent.button.href}>
          {contactContent.button.label}
        </a>
        <p className="contact__note">{contactContent.note}</p>
      </div>
    </section>
  );
}

export default Contact;
