/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState, useEffect } from "react";
import Color from "color";

const Colors = ({ color, ratio }: ShadeProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const remove = setTimeout(() => setIsCopied(false), 1000);
    return () => clearTimeout(remove);
  }, [isCopied]);

  return (
    <div>
      <button
        className="relative block w-24 h-24 rounded-full shadow-lg "
        style={{
          backgroundColor: color,
        }}
        onClick={() => {
          navigator.clipboard.writeText(color);
          setIsCopied(true);
        }}>
        <span className="sr-only">copy color</span>
        {isCopied && (
          <span
            className="absolute text-sm font-bold capitalize -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4"
            style={{
              color: Color(color).negate().hex(),
            }}>
            copied
          </span>
        )}
      </button>
      <span className="block mx-auto mt-2 text-sm w-fit">
        {ratio * 10}% ({color})
      </span>
    </div>
  );
};

export default Colors;
