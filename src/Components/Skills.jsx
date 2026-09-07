import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <dl>
        {skills.map((group) => (
          <div key={group.group}>
            <dt>{group.group}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
