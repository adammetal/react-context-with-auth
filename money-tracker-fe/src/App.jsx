import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import { useThemeToggle } from "./context/ThemeProvider";

function App() {
  const [ping, setPing] = useState(null);
  const toggleTheme = useThemeToggle();

  useEffect(() => {
    fetch("/api/ping")
      .then((r) => r.json())
      .then((r) => setPing(r));
  }, []);

  return (
    <div className="App">
      <h1>Track your spendings</h1>
      <Button text="Toggle Theme" onClick={toggleTheme} />
      <pre>{JSON.stringify(ping, null, 2)}</pre>
    </div>
  );
}

export default App;
