import ColorCard from "../ColorCard/ColorCard";
import "./DetailedTheme.css";
import React from "react";

export default function DetailedTheme({ colors }) {
  return (
    <>
      <ul className="detailed-theme">
        {colors.map((color) => (
          <li key={color.role}>
            <ColorCard color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}
