import { education } from "../data/content";

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <h3>{education.degree}</h3>
      <p className="meta">{education.school}</p>
      <p>{education.detail}</p>
      <p>
        {education.verification.note}{" "}
        <a
          href={education.verification.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {education.verification.service}
        </a>
        :
      </p>
      <p>
        <code className="verify-code">{education.verification.code}</code>
      </p>
      <p className="meta">{education.verification.after}</p>
      <img
        className="degree-image"
        src={asset(education.image)}
        alt={`${education.degree}, ${education.school}`}
        loading="lazy"
      />
    </section>
  );
}
