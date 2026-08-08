import { links } from "@/content/portfolio";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <p>Have an ambitious system to build?</p>
      <h2>Let&apos;s talk.</h2>
      <a className="email" href={links.email}>Email Vaibhav <span>↗</span></a>
      <footer><span>© 2026 Vaibhav Pandey</span><span>Built with care in Bengaluru</span></footer>
    </section>
  );
}
