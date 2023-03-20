import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import { useThemeToggle } from "./context/ThemeProvider";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: ping, fetcher } = useFetch('/api/ping');
  const toggleTheme = useThemeToggle();

  return (
    <div className="App">
      <h1>Track your spendings</h1>
      <Button text="Toggle Theme" onClick={toggleTheme} />
      <Button text="Refetch stats" onClick={fetcher} />
      <pre>{JSON.stringify(ping, null, 2)}</pre>
    </div>
  );
}

export default App;
