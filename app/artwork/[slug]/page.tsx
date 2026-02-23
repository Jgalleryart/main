import { notFound } from "next/navigation";
import { artworks } from "../../../content/artworks";
import ArtworkDescription from "../../../components/ArtworkDescription";
import ArtworkDetails from "../../../components/ArtworkDetails";
import ArtworkHero from "../../../components/ArtworkHero";
import OtherWorks from "../../../components/OtherWorks";

type ArtworkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    notFound();
  }

  return (
    <main className="artwork-page">
      <ArtworkHero artwork={artwork} />
      <ArtworkDescription artwork={artwork} />
      <ArtworkDetails artwork={artwork} />
      <OtherWorks currentSlug={artwork.slug} />
    </main>
  );
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}
