import React from "react";

export default function StockHighLow({ high, low }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-sm text-gray-700">高値: {high}</div>
      <div className="text-sm text-gray-700">安値: {low}</div>
    </div>
  );
}