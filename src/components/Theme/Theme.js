import "./Theme.css";
import DetailedTheme from "../DetailedTheme/DetailedTheme";
import ThemePreview from "../ThemePreview/ThemePreview";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function Theme({ name, colors, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <section className="theme">
      <button onClick={toggleDetails}>
        <h2 className="theme-title">{name}</h2>
        {showDetails ? <IconChevronUp /> : <IconChevronDown />}
      </button>
      {showDetails ? (
        <>
          <button onClick={onDelete}>Delete</button>
          <DetailedTheme colors={colors} />
        </>
      ) : (
        <ThemePreview colors={colors} />
      )}
    </section>
  );
}
