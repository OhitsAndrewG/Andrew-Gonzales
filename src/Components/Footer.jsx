import { profile, links } from "../data/content";

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export default function Footer() {
  return (
    <footer>
      <p>
        <a href={links.email}>{profile.email}</a> |{" "}
        <a href={links.emailAlt}>{profile.emailAlt}</a> |{" "}
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          github.com/OhitsAndrewG
        </a>{" "}
        |{" "}
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href={asset(profile.resume.file)} download>
          Resume (PDF)
        </a>
      </p>
      <p>Last updated {__BUILD_DATE__}.</p>
    </footer>
  );
}
