import { createContext, useContext } from "react";

export const AuthContext = createContext([]);

function AuthProvider({ children }) {
  const user = {
    id: "123456",
    name: "dev junior",
    email: "devjunior@gmail.com",
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };