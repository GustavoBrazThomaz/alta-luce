import { useState } from "react";
import type { Size } from "../types";

export function ProductSizes({ sizes }: { sizes: Size[] }) {
  const [selectedSize, setSelectedSize] = useState<number>(0);

  return (
    <div>
      <p className="font-serif">Tamanhos</p>
      <div className="flex gap-4 mt-2">
        {sizes.map((item, index) => (
          <button
            className={`p-2 size-12 font-bold rounded-full border  cursor-pointer disabled:text-gray-300 disabled:cursor-default ${
              selectedSize === index ? "border-gray-300" : "border-gray-100"
            }`}
            onClick={() => setSelectedSize(index)}
            disabled={item.disabled}
          >
            {item.size}
          </button>
        ))}
      </div>
    </div>
  );
}
