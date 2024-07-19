import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

//TODO protect user's password safe
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    }, { withCredentials: true })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// use this apt to achieve update password 
// @PutMapping("/updatepassword")
//   public ResponseEntity<?> updatePassword(@RequestParam long id, @RequestParam String password)
// give me some react codes to achieve this
// you can use axios to send request to backend

const resetPassword = () => {
    return axios
        .post(API_URL + "resetPassword", {
        username,
        password,
        })
        .then((response) => {
        if (response.data.username) {
            localStorage.setItem("user", JSON.stringify(response.data));
        } 
        return response.data;
        });
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
