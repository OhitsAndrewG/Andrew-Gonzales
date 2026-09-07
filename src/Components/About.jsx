import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      {profile.summary.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
}
