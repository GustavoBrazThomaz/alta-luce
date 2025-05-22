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
    <div className="space-y-2">
      <img
        src={images[selectedImage]}
        alt={`Imagem principal do produto: ${alt}`}
        role="figure"
      />
      <ul className="flex gap-4" role="list">
        {images.map((image, index) => (
          <li role="listitem">
            <button
              className={"size-26 cursor-pointer"}
              onClick={() => setSelectedImage(index)}
            >
              <img
                className="w-full h-full object-cover"
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
