import Image from "next/image";
import Link from "next/link";
import { artworks } from "../content/artworks";

export default function HomeFeaturedWorks() {
  const featured = artworks.find((artwork) => artwork.featured) ?? artworks[0];

  return (
    <section className="home-featured section-block">
      <div className="home-featured-inner">
        <article className="home-featured-card">
          <Link href={`/artwork/${featured.slug}`} className="home-featured-link">
            <Image
              src={featured.images[0]}
              alt={featured.title}
              width={1600}
              height={1600}
              loading="lazy"
              sizes="(max-width: 900px) 90vw, 800px"
              className="home-featured-image"
            />
            <h2>{featured.title}</h2>
            <p>
              {featured.medium} · {featured.dimensions} · {featured.year}
            </p>
          </Link>
          <p className="home-featured-collection-link-wrap">
            <Link href="/artwork" className="home-featured-collection-link">
              View Full Collection
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
}
