import { profile, links } from "../data/content";

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export default function Header() {
  return (
    <header id="top">
      <img
        className="headshot"
        src={asset(profile.headshot)}
        alt={profile.name}
      />
      <h1>{profile.name}</h1>
      <p className="subtitle">
        {profile.role} &middot; {profile.location}
      </p>
      <p className="subtitle">
        <a href={links.email}>{profile.email}</a> |{" "}
        <a href={links.emailAlt}>{profile.emailAlt}</a> |{" "}
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href={asset(profile.resume.file)} download>
          Resume
        </a>{" "}
        <span className="meta">(PDF, {profile.resume.size})</span>
      </p>
      <nav>
        [ <a href="#about">About</a> | <a href="#experience">Experience</a> |{" "}
        <a href="#projects">Projects</a> | <a href="#skills">Skills</a> |{" "}
        <a href="#education">Education</a> ]
      </nav>
    </header>
  );
}
