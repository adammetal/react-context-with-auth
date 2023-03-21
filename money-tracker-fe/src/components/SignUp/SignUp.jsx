import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

const SignUp = ({ onSuccess }) => {
  const { fetcher } = useFetch("/api/auth/sign-up", false, () => {
    onSuccess();
  });

  const { setter, get, all } = useForm({ email: "", password: "" });

  // TODO: Validation is missing
  const onSubmit = (e) => {
    e.preventDefault();

    const body = all();

    fetcher({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
