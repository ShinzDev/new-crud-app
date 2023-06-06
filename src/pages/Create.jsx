import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state)=> state.users)
  const dispatch = useDispatch()
  const navigate =  useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
     // Check if users array is empty
    const id = users.length === 0 ? 1 : users[users.length - 1].id + 1;

    dispatch(addUser({ id, name, email }));
    // dispatch(addUser({id:users[users.length - 1].id + 1 , name, email}))
    // Reset the form fields
    navigate('/')
    setName("");
    setEmail("");
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="shadow w-50 bg-light p-5 border">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Add new user</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="mt-3">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100 my-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
