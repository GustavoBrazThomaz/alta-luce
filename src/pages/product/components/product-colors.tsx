import { useState } from "react";
import type { Color } from "../types";

export function ProductColors({ colors }: { colors: Color[] }) {
  const [colorName, setColorName] = useState<string>(colors[0].name);

  return (
    <div className="mt-8">
      <p className="font-serif">Cor - {colorName}</p>
      <div className="flex gap-4 mt-2 relative">
        {colors.map((color) => (
          <button
            className={
              "p-2 size-12 font-bold rounded-full cursor-pointer border border-gray-300 disabled:cursor-not-allowed disabled:border-none"
            }
            onClick={() => setColorName(color.name)}
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
