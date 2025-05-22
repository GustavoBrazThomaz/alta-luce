import { useState } from "react";
import type { Size } from "../types";
import { useSearchParamValue } from "../../../hooks";

export function ProductSizes({ sizes }: { sizes: Size[] }) {
  const { paramSize, setParam } = useSearchParamValue();
  const [selectedSize, setSelectedSize] = useState<number>(paramSize);

  function handleSelectSize(index: number) {
    setSelectedSize(index);
    setParam({ name: "size", value: index.toString() });
  }

  return (
    <div>
      <p className="font-serif">Tamanhos</p>
      <div className="flex gap-4 mt-2">
        {sizes.map((item, index) => (
          <button
            key={item.size + index}
            className={`p-2 size-12 font-bold rounded-full border  cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed ${
              selectedSize === index ? "border-gray-300" : "border-gray-100"
            }`}
            onClick={() => handleSelectSize(index)}
            disabled={item.disabled}
          >
            {item.size}
          </button>
        ))}
      </div>
    </div>
  );
}
