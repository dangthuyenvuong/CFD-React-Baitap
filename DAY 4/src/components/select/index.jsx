import React from "react";
import "./style.scss";

export default function Select({ onchange, textActive = false }) {
  const arr = [
    { id: "IT" },
    { id: "Design" },
    { id: "DevOps" },
    { id: "Other" },
  ];
  console.log(textActive);
  return (
    <div>
      <select onChange={onchange}>
        {arr.map((e, i) => (
          <option key={i}>{e.id}</option>
        ))}
      </select>
      {textActive && <textarea></textarea>}
    </div>
  );
}
