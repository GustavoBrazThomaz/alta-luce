import { useState } from "react";
import type { Color } from "../types";
import { useSearchParamValue } from "../../../hooks";

export function ProductColors({ colors }: { colors: Color[] }) {
  const { paramColor, setParam } = useSearchParamValue();
  const [colorName, setColorName] = useState<string>(colors[paramColor].name);

  function handleSelectColor(index: number) {
    setColorName(colors[index].name);
    setParam({ name: "color", value: index.toString() });
  }

  return (
    <div className="mt-8">
      <p className="font-serif">Cor - {colorName}</p>
      <div className="flex gap-4 mt-2 relative">
        {colors.map((color, index) => (
          <button
            className={`p-2 size-12 font-bold rounded-full cursor-pointer  disabled:cursor-not-allowed disabled:border-none ${
              paramColor === index ? "scale-110" : ""
            }`}
            key={color.name + index}
            onClick={() => handleSelectColor(index)}
            style={{
              backgroundColor: color.hex,
            }}
            disabled={color.disabled}
          ></button>
        ))}
      </div>
    </div>
  );
}
