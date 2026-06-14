import { projects } from "../data/projects";

export function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      <div>
        {projects.map((project) => (
          <article key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}