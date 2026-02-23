import type { Artwork } from "../content/artworks";
import Image from "next/image";

type ArtworkDetailsProps = {
  artwork: Artwork;
};

export default function ArtworkDetails({ artwork }: ArtworkDetailsProps) {
  if (artwork.detailStudies.length === 0) {
    return null;
  }

  return (
    <section className="artwork-details">
      {artwork.detailStudies.map((detail, index) => (
        <figure key={`${artwork.slug}-${detail.caption}-${index}`} className="detail-study">
          <Image
            src={detail.src}
            alt={`${artwork.title} ${detail.caption}`}
            width={1200}
            height={1200}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <figcaption>{detail.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}
