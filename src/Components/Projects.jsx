import { projects } from "../data/content";

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div className="project" key={project.name}>
          <h3>
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p className="meta">{project.meta}</p>
          <p>{project.description}</p>

          {project.points.length > 0 && (
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}

          {project.table && (
            <table>
              <caption>{project.table.caption}</caption>
              <thead>
                <tr>
                  {project.table.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {project.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {project.images?.map((image) => (
            <figure key={image.file}>
              <img
                src={asset(image.file)}
                alt={image.caption}
                loading="lazy"
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}

          <p className="tech">{project.tech}</p>
        </div>
      ))}
    </section>
  );
}
