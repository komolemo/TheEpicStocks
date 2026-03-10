import React from "react";

export default function StockName({ name, code }) {
  return (
    <div className="flex flex-col gap-1 mb-2 max-sm:mb-3">
      <div className="text-base font-bold text-white">{name}</div>
      <div className="text-sm text-white">{code}</div>
    </div>
  );
}