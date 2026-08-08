import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="identity-link" aria-label="Vaibhav Pandey, home">
        <Image
          className="identity-image"
          src="https://github.com/vaibhav0806.png?size=96"
          alt="Vaibhav Pandey"
          width={36}
          height={36}
          priority
        />
        <span>Vaibhav Pandey</span>
      </a>
    </header>
  );
}
