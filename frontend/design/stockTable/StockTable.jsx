import React from "react";
import StockRow from "./StockRow";

export default function StockTable() {
  const stocks = [
    {
      name: "トヨタ自動車",
      code: "7203",
      price: 3200,
      arrow: "up",
      diff: "+45",
      rate: "+1.42%",
      high: 3250,
      low: 3150,
    },
    {
      name: "ソニーグループ",
      code: "6758",
      price: 12450,
      arrow: "down",
      diff: "-80",
      rate: "-0.64%",
      high: 12600,
      low: 12300,
    },
  ];
  return (
    <div className="w-full max-w-[900px] mx-auto font-sans text-gray-800">

      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr] px-4 py-2 bg-gray-100 font-bold border-b-2 border-gray-300 text-sm max-sm:hidden">
        <div>銘柄名</div>
        <div>現在値</div>
        <div>前日比</div>
        <div>高値安値</div>
      </div>

      {/* Rows */}
      {stocks.map((s, i) => (
        <StockRow key={i} stock={s} />
      ))}
    </div>
  );
}