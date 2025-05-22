import { useState } from "react";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="space-y-2 max-md:w-full">
      <img
        src={images[selectedImage]}
        alt={`Imagem principal do produto: ${alt}`}
        role="figure"
        className=" max-sm:max-w-full pointer-events-none"
      />
      <ul className="flex gap-2  max-sm:max-w-full" role="list">
        {images.map((image, index) => (
          <li role="listitem">
            <button
              className={"aspect-square cursor-pointer group"}
              onClick={() => setSelectedImage(index)}
            >
              <img
                className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition "
                src={image}
                alt={`Miniatura ${index + 1} do produto: ${alt}`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
