import "./ThemePreview.css";
import React from "react";

export default function ThemePreview({ colors }) {
  return (
    <ul className="theme-preview">
      {colors.map((color) => (
        <li key={color.role}>
          <div
            className="theme-preview-theme"
            style={{ backgroundColor: color.value }}
          ></div>
        </li>
      ))}
    </ul>
  );
}
