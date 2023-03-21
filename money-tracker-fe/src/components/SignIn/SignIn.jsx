import useForm from "../../hooks/useForm";
import { useUser } from "../../context/UserProvider";
import Button from "../Button";

const SignIn = () => {
  const { user, login, logout } = useUser();
  const { setter, get, all } = useForm({ email: "", password: "" });

  // TODO: Validation is missing
  const onSubmit = (e) => {
    e.preventDefault();
    const body = all();
    login(body);
  };

  if (user) {
    return (
      <div>
        <h1>You signed in as</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <Button text="Logout" onClick={logout} />
      </div>
    );
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={get("email")}
          onChange={setter("email")}
          placeholder="Email address"
        />
        <input
          type="password"
          value={get("password")}
          onChange={setter("password")}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
