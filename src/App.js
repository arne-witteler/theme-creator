import "./App.css";
import Theme from "./components/Theme/Theme";
import { themes } from "./db";

function App() {
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <h2>Add a theme</h2>
      <form id="themeForm">
        <label for="themeTitle">Theme Title:</label>
        <input type="text" id="themeTitle" name="themeTitle" required />

        <label for="color1">Color 1:</label>
        <input type="color" id="color1" name="color1" required />

        <label for="color2">Color 2:</label>
        <input type="color" id="color2" name="color2" required />

        <label for="color3">Color 3:</label>
        <input type="color" id="color3" name="color3" required />

        <label for="color4">Color 4:</label>
        <input type="color" id="color4" name="color4" required />

        <button type="submit">Add Theme</button>
      </form>
      <main className="main-container">
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme name={theme.name} colors={theme.colors} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
