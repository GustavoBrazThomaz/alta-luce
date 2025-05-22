import type { Product } from "./types";

export const product: Product = {
  name: "Blazer L’Impériale",
  description:
    "Combinando elegância clássica e design ousado, o Blazer L’Impériale une dois tons sofisticados em uma peça única de alfaiataria fina. Confeccionado em lã italiana com forro de seda, é ideal para quem deseja impactar com estilo e personalidade.",
  price: "R$ 4.790,00",
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
      images: [
        "https://images.pexels.com/photos/7959559/pexels-photo-7959559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7959585/pexels-photo-7959585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7959626/pexels-photo-7959626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7959571/pexels-photo-7959571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      name: "Noir Élégance",
      hex: "#9C9C9C",
      disabled: false,
      images: [
        "https://images.pexels.com/photos/9066320/pexels-photo-9066320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/9066308/pexels-photo-9066308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/9066311/pexels-photo-9066311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      name: "Gris Moderne",
      hex: "#D5D5D5",
      disabled: true,
      images: [],
    },
    {
      name: "Ivory Gold",
      hex: "#F3E5DA",
      disabled: true,
      images: [],
    },
  ],
};
