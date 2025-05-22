import { useEffect, useState } from "react";
import { useSearchParamValue } from "../hooks";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const { paramColor } = useSearchParamValue();

  useEffect(() => {
    setSelectedImage(0);
  }, [paramColor]);

  return (
    <div className="space-y-2 max-md:w-full">
      <img
        src={images[selectedImage]}
        alt={`Imagem principal do produto: ${alt}`}
        role="figure"
        className=" max-sm:max-w-full pointer-events-none"
      />
      <ul className="flex gap-2  max-sm:max-w-full" role="list">
        {images.length > 1 &&
          images.map((image, index) => (
            <li role="listitem" key={`product_image_${index}`}>
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
