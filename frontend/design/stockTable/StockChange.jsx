import React from "react";

export default function StockChange({ diff, rate }) {
  return (
    <div className="flex flex-col gap-1 mb-2 max-sm:mb-3">
      <div className="font-bold">{diff}</div>
      <div className="text-sm text-gray-600">({rate})</div>
    </div>
  );
}