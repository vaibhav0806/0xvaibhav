import { links } from "@/content/portfolio";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Have a hard system to build?</h2>
      <p>I&apos;m open to backend, FDE, and DevRel roles with ambitious technical teams.</p>
      <a className="email" href={links.email}>Email Vaibhav <span aria-hidden="true">↗</span></a>
      <footer>
        <span>© 2026 Vaibhav Pandey</span>
        <div><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={links.twitter} target="_blank" rel="noreferrer">X</a></div>
      </footer>
    </section>
  );
}
