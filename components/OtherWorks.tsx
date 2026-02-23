import Link from "next/link";
import Image from "next/image";
import { artworks } from "../content/artworks";

type OtherWorksProps = {
  currentSlug: string;
};

export default function OtherWorks({ currentSlug }: OtherWorksProps) {
  const otherWorks = artworks.filter((artwork) => artwork.slug !== currentSlug);

  if (otherWorks.length === 0) {
    return null;
  }

  return (
    <section className="other-works">
      <div className="other-works-inner">
        <h2>From the Series</h2>
        <div className="other-works-grid">
          {otherWorks.map((artwork) => (
            <article key={artwork.slug} className="other-work-card">
              <Link href={`/artwork/${artwork.slug}`} className="other-work-link">
                <Image
                  src={artwork.images[0]}
                  alt={artwork.title}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <h3>{artwork.title}</h3>
                <p>
                  {artwork.medium} · {artwork.year}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
