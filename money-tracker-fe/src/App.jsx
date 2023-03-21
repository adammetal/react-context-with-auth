import "./App.css";
import Button from "./components/Button";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Track from "./components/Track";
import Protected from "./components/Protected";
import { useThemeToggle } from "./context/ThemeProvider";
import useFetch from "./hooks/useFetch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home Page</h1>
  },
  {
    path: "/protected",
    element: (
      <Protected>
        <Track />
      </Protected>
    ),
  },
]);

function App() {
  const { data: ping, fetcher } = useFetch("/api/ping");
  const toggleTheme = useThemeToggle();

  return (
    <div className="App">
      <h1>Track your spendings</h1>
      <Button text="Toggle Theme" onClick={toggleTheme} />
      <Button text="Refetch stats" onClick={fetcher} />
      <pre>{JSON.stringify(ping, null, 2)}</pre>
      <SignUp onSuccess={() => console.log("registration successful")} />
      <SignIn />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
