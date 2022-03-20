import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {

        console.log(response.data);
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("fname", response.data.fname);
        localStorage.setItem("lname", response.data.lname);
        localStorage.setItem("userID", response.data.id);
        setAuthState({
          email: response.data.email,
          id: response.data.id,
          status: true,
        });
        if (response.data.role == 1) {
          history.push("/manage")
        } else if (response.data.role == 2) {
          history.push("/grading")
        } else if (response.data.role == 3) {
          history.push("/courses")
        }
      }


    });
  };
  return (
    <div className="loginContainer">
      <label>Email:</label>
      <input
        className="loginInput"
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        className="loginInput"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button className="loginBtn" onClick={login}> Login </button>
    </div>
  );
}

export default Login;