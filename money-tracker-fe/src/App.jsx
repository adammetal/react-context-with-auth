import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ping, setPing] = useState(null);

  useEffect(() => {
    fetch("/api/ping")
      .then((r) => r.json())
      .then((r) => setPing(r));
  }, []);

  return (
    <div className="App">
      <h1>Track your spendings</h1>
      <pre>{JSON.stringify(ping, null, 2)}</pre>
    </div>
  );
}

export default App;
