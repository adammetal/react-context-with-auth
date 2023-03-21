import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";

const Protected = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user && children}</>;
};

export default Protected;
