import type { Artwork } from "../content/artworks";
import Image from "next/image";
import Link from "next/link";

type ArtworkHeroProps = {
  artwork: Artwork;
};

export default function ArtworkHero({ artwork }: ArtworkHeroProps) {
  return (
    <section className="artwork-hero">
      <Image
        src={artwork.images[0]}
        alt={artwork.title}
        width={2000}
        height={1400}
        priority
        sizes="(max-width: 1100px) 90vw, 1000px"
      />
      <h1>{artwork.title}</h1>
      <p>
        {artwork.medium} · {artwork.dimensions} · {artwork.year}
      </p>
      <p className="artwork-inquire-wrap">
        <Link href={`/contact?artwork=${artwork.slug}`} className="artwork-inquire-link">
          Inquire
        </Link>
      </p>
    </section>
  );
}
