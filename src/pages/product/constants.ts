import type { Product } from "./types";

export const product: Product = {
  name: "Blazer L’Impériale",
  description:
    "Combinando elegância clássica e design ousado, o Blazer L’Impériale une dois tons sofisticados em uma peça única de alfaiataria fina. Confeccionado em lã italiana com forro de seda, é ideal para quem deseja impactar com estilo e personalidade.",
  price: "R$ 4.790,00",
  images: [
    "https://images.pexels.com/photos/7959559/pexels-photo-7959559.jpeg",
    "https://images.pexels.com/photos/7959585/pexels-photo-7959585.jpeg",
    "https://images.pexels.com/photos/7959626/pexels-photo-7959626.jpeg",
    "https://images.pexels.com/photos/7959571/pexels-photo-7959571.jpeg",
  ],
  sizes: [
    { size: "P", disabled: false },
    { size: "M", disabled: false },
    { size: "G", disabled: true },
    { size: "GG", disabled: true },
  ],
  colors: [
    {
      name: "Original Dualité",
      hex: "#F8F1E7",
      disabled: false,
    },
    {
      name: "Noir Élégance",
      hex: "#9C9C9C",
      disabled: true,
    },
    {
      name: "Gris Moderne",
      hex: "#D5D5D5",
      disabled: true,
    },
    {
      name: "Ivory Gold",
      hex: "#F3E5DA",
      disabled: true,
    },
  ],
};
