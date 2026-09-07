import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((job) => (
        <div key={job.company}>
          <h3>
            {job.role}, {job.company}
          </h3>
          <p className="meta">
            {job.period} &middot; {job.place}
          </p>
          <ul>
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <p className="tech">{job.tech}</p>
        </div>
      ))}
    </section>
  );
}
