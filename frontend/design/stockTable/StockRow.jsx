import React from "react";
import StockName from "./StockName";
import StockPrice from "./StockPrice";
import StockChange from "./StockChange";
import StockHighLow from "./StockHighLow";

export default function StockRow({ stock }) {
  return (
    <button
      className="
        w-full grid grid-cols-[2fr_1fr_1fr_1.5fr]
        px-4 py-3 text-left bg-white border-b border-gray-200
        hover:bg-blue-50 transition
        max-sm:grid-cols-1
      "
    >
      <StockName name={stock.name} code={stock.code} />
      <StockPrice price={stock.price} arrow={stock.arrow} />
      <StockChange diff={stock.diff} rate={stock.rate} />
      <StockHighLow high={stock.high} low={stock.low} />
    </button>
  );
}