import {
  About,
  Education,
  Experience,
  Footer,
  Header,
  Projects,
  Skills,
  TopLink,
} from "./Components";

export default function App() {
  return (
    <div className="page">
      <Header />
      <hr />
      <About />
      <TopLink />
      <hr />
      <Experience />
      <TopLink />
      <hr />
      <Projects />
      <TopLink />
      <hr />
      <Skills />
      <TopLink />
      <hr />
      <Education />
      <TopLink />
      <hr />
      <Footer />
    </div>
  );
}
