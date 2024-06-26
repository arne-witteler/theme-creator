import "./App.css";
import Theme from "./components/Theme/Theme";
import ThemeForm from "./components/ThemeForm/ThemeForm";
import { themes as initialThemes } from "./db";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    setThemes([newThemeWithId, ...themes]);
  }

  function handleDeleteTheme(id) {
    const updatedThemes = themes.filter((theme) => theme.id !== id);

    setThemes(updatedThemes);
  }

  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ThemeForm onSubmit={handleAddTheme} />
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme
                name={theme.name}
                colors={theme.colors}
                onDelete={() => handleDeleteTheme(theme.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
