import axios from "axios";
import http from "./httpService";

const tokenUrl = "/token";
const tokenKey = "accessToken";

async function login(username, password) {
  const { data: jwt } = await http.post(tokenUrl, { username, password });
  localStorage.setItem(tokenKey, jwt.access);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getJwt() {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return localStorage.getItem("accessToken");
  }
}

http.setJwt(getJwt());

const auth = {
  login,
  loginWithJwt,
  logout,
};

export default auth;
