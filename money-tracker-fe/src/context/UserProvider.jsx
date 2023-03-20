import { createContext, useCallback, useEffect, useState } from "react";

const UserContext = createContext(null);

const getToken = () => window.localStorage.getItem("token");
const setToken = (token) => window.localStorage.setItem("token", token);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const getMe = (token) => {
    fetch("/api/auth/me", {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
      });
  };

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    getMe(token);
  }, []);

  const login = (creds) => {
    fetch("/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    }).then((token) => {
      setToken(token);
      getMe(token);
    });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
