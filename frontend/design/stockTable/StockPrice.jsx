import React from "react";

export default function StockPrice({ price, arrow }) {
  return (
    <div className={`flex flex-row items-center gap-2 mb-2 max-sm:mb-3
      ${
        arrow === "up" ? "text-red-600" : "text-green-600"
      }
    `}>
      <div className="text-lg font-bold">{price}</div>
      <div
        className={`text-lg ${
          arrow === "up" ? "text-red-600" : "text-green-600"
        }`}
      >
        {arrow === "up" ? "▲" : "▼"}
      </div>
    </div>
  );
}