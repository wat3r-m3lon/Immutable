import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import usePageTitle from '../../src/hooks/usePageTitle';

axios.defaults.withCredentials = true;
export default function EditUser() {
  usePageTitle("Edit User"); 

  let navigate = useNavigate();

  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    status: "",
  });
  const { name, username, email, status } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/admin/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/admin/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="cool-md-6 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
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
              />
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the status"
                name="status"
                value={user.status}
                onChange={(e) => onInputChange(e)}
              />
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
