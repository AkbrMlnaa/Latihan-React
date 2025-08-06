import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

const useLogin = () => {

  const [username, setUsername] = useState("");
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const name = getUsername(token);
        setUsername(name);
      } else {
        window.location.href = "/login";
      }
    } catch (err) {
      console.error("Token tidak valid", err);
    }
  }, []);

  return username;
};

export default useLogin;
