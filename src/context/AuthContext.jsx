import { createContext, useContext, useState } from "react";
import { Value } from "sass";
import Login from "../pages/auth/login";

export const AuthContext = createContext();

export const AuthProvider = ({ childrent }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();

  const submitLogin = () => {
    setLogin(true);
    setUser({
      name: "Ho Thi Anh",
      email: "abc@gmail.com",
      avatar: "...",
    });
  };

  const submitLogout = () => {
    // console.log("logout");
    setLogin(false);
    setUser(undefined);
  };
  return (
    <AuthContext.Provider value={{ login, user, submitLogin, submitLogout }}>
      {childrent}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
