import Image from "next/image";

type SiteHeaderProps = {
  homeHref?: string;
};

export function SiteHeader({ homeHref = "#top" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a href={homeHref} className="identity-link" aria-label="Vaibhav Pandey, home">
        <Image
          className="identity-image"
          src="/avatar.jpg"
          alt=""
          width={36}
          height={36}
          priority
        />
        <span>Vaibhav Pandey</span>
      </a>
    </header>
  );
}
