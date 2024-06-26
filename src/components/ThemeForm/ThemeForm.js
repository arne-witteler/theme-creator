import "./ThemeForm.css";

const intialTheme = {
  name: "",
  colors: [
    { role: "primary", value: "#ffffff" },
    { role: "secondary", value: "#ffffff" },
    { role: "surface", value: "#ffffff" },
    { role: "surface-on", value: "#ffffff" },
  ],
};

export default function ThemeForm({ onSubmit }) {
  const initialData = intialTheme;

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onSubmit(newTheme);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a theme</h2>
      <input
        aria-label="theme title"
        className="theme-form__name-input"
        type="text"
        placeholder="Theme Name"
        name="name"
        defaultValue={initialData.name}
        required
      />
      <fieldset className="theme-form__color-inputs">
        {initialData.colors.map((color) => (
          <input
            key={color.role}
            className="theme-form__color-input"
            type="color"
            name={color.role}
            aria-label={color.role}
            defaultValue={color.value}
          />
        ))}
      </fieldset>
      <button className="theme-form__submit-button" type="submit">
        Add theme
      </button>
    </form>
  );
}
