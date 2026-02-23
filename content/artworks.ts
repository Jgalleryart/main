export type Artwork = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  images: string[];
  detailStudies: {
    src: string;
    caption: string;
  }[];
  description: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "quiet-bloom-study-i",
    title: "Quiet Bloom Study I",
    year: 2025,
    medium: "Acrylic on linen",
    dimensions: "90 x 60 cm",
    images: ["/images/placeholder-artwork.svg"],
    detailStudies: [
      {
        src: "/images/placeholder-artwork.svg",
        caption: "Detail Study — Brushwork",
      },
      {
        src: "/images/placeholder-artwork.svg",
        caption: "Detail Study — Layering",
      },
    ],
    description:
      "A quiet, close observation of botanical form, balancing softness and structure through restrained color transitions and negative space.",
    featured: true,
  },
  {
    slug: "winter-stem-variation",
    title: "Winter Stem Variation",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: "80 x 80 cm",
    images: ["/images/placeholder-artwork.svg"],
    detailStudies: [
      {
        src: "/images/placeholder-artwork.svg",
        caption: "Detail Study — Surface Texture",
      },
    ],
    description:
      "Subtle tonal shifts describe seasonal stillness, with edges softened to preserve calm pacing and an immersive museum-wall presence.",
  },
  {
    slug: "field-notes-in-ochre",
    title: "Field Notes in Ochre",
    year: 2023,
    medium: "Mixed media on panel",
    dimensions: "70 x 50 cm",
    images: ["/images/placeholder-artwork.svg"],
    detailStudies: [
      {
        src: "/images/placeholder-artwork.svg",
        caption: "Detail Study — Pigment Bloom",
      },
    ],
    description:
      "A restrained composition focused on rhythm and spacing, where botanical fragments emerge slowly through layered marks and quiet contrast.",
  },
];
