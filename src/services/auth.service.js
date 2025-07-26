import axios from "axios";
import { jwtDecode } from "jwt-decode";

const login = (data, callback) => {
    axios.post("https://fakestoreapi.com/auth/login", data).then((res) => {
        callback(true, res.data.token)
    }).catch((err) => {
        callback(false, err)
    })
}

const getUsername = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken.user;
}


export { login, getUsername };