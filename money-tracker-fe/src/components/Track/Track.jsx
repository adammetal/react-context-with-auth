import { useUser } from "../../context/UserProvider";

const Track = () => {
  const { user } = useUser();

  if (!user) {
    return <h1>Sign in to use this function</h1>;
  }

  return (
    <div>
      <h1>Secret area just for authenticated users</h1>
    </div>
  );
};

export default Track;
