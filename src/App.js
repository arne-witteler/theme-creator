import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";
import { themes } from "./db";

function App() {
  const theme = themes[0];
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <h2 className="theme-title">{theme.name}</h2>
        <ul className="color-list">
          {theme.colors.map((color) => (
            <li key={color.role}>
              <ColorCard color={color} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
