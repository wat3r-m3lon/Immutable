import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePageTitle from '../../src/hooks/usePageTitle';

export default function AddUser() {
  usePageTitle("Add User"); 

  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios({method:'post',url:'http://localhost:8080/admin',data:user,})
    //await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="cool-md-6 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
