import { createContext, useState } from "react";
import { api } from "../services/api/api";

export const AuthContext = createContext();
// eslint-disable-next-line prettier/prettier, react/prop-types
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [dataToken, setDataToken] = useState("");

  const loadingStoreData = async () => {
    const storageUser = localStorage.getItem("@Auth:user");
    const storageToken = localStorage.getItem("@Auth:token");

    if (storageUser && storageToken) {
      setUser(storageUser);
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post("/login", {
        email: email,
        password: password,
      });

      if (data.error) {
        console.log(data.error);
      } else {
        setDataToken(data.token);
        setUser(data.user);
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        localStorage.setItem("@Auth:token", data.token);
        localStorage.setItem("@Auth:user", JSON.stringify(data.user));
        console.log("cheguei aqui");
        return data.user;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // eslint-disable-next-line prettier/prettier
  return(
    <AuthContext.Provider
      value={{
        dataToken,
        user,
        signed: !!user,
        signIn,
        loadingStoreData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
