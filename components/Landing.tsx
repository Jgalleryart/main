import Image from "next/image";

export default function Landing() {
  return (
    <section id="landing" className="landing">
      <Image
        src="/images/landing-placeholder.svg"
        alt="Featured botanical artwork"
        fill
        priority
        sizes="100vw"
        className="landing-image"
      />
      <div className="overlay">
        <h1>Quiet Observations of Nature</h1>
        <h2>J Gallery Art</h2>
      </div>
    </section>
  );
}
