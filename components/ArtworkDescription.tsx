import type { Artwork } from "../content/artworks";

type ArtworkDescriptionProps = {
  artwork: Artwork;
};

export default function ArtworkDescription({ artwork }: ArtworkDescriptionProps) {
  return (
    <section className="artwork-description">
      <p>{artwork.description}</p>
    </section>
  );
}
