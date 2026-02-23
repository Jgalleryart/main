import Link from "next/link";
import Image from "next/image";
import { artworks } from "../content/artworks";

export default function GalleryIndex() {
  return (
    <section className="gallery-index">
      <div className="gallery-index-inner">
        <div className="gallery-index-grid">
          {artworks.map((artwork) => (
            <article key={artwork.slug} className="gallery-index-card">
              <Link href={`/artwork/${artwork.slug}`} className="gallery-index-link">
                <Image
                  src={artwork.images[0]}
                  alt={artwork.title}
                  width={1400}
                  height={1400}
                  loading="lazy"
                  sizes="(max-width: 900px) 90vw, 560px"
                />
                <h2>{artwork.title}</h2>
                <p>
                  {artwork.medium} · {artwork.dimensions} · {artwork.year}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
