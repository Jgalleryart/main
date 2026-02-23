import ContactForm from "../../components/ContactForm";
import { artworks } from "../../content/artworks";

type ContactPageProps = {
  searchParams: Promise<{
    artwork?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { artwork: artworkSlug } = await searchParams;
  const relatedArtwork = artworks.find((item) => item.slug === artworkSlug);

  return (
    <main className="contact-page">
      <section className="section-block">
        <div className="contact-inner">
          <h1>Contact</h1>
          <p className="contact-intro">
            For inquiries regarding works or commissions, please write below.
          </p>

          <ContactForm relatedArtworkTitle={relatedArtwork?.title} />
        </div>
      </section>
    </main>
  );
}
