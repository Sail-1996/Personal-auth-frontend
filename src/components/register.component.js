import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { registerUser } from "./../redux/actions/authActionCreator";
const RegisterForm = ({ dispatchRegisterAction }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(
      firstName,
      lastName,
      email,
      password,
      () => toast.success("Account created Successfully !"),
      (message) => toast.error(`Error:${message}`)
    );
  };
  return (
    <>
      <h2>New User</h2>
      <h4>Create an account</h4>
      <br />
      <form noValidate onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            noValidate
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            noValidate
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Email Address</label>
          <input
            noValidate
            id="email1"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Enter password1</label>
          <input
            noValidate
            id="password1"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mt-2">
          {" "}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "3px" }}
          >
            Register | <i className="fas fa-user-plus"></i>
          </button>
          <button className="btn btn-outline-secondary ">
            cancel | <i className="fas fa-times"></i>
          </button>
        </div>
      </form>
    </>
  );
};
const mapDispatchprops = (dispatch) => ({
  dispatchRegisterAction: (
    firstName,
    lastName,
    email,
    password,
    onSuccess,
    onError
  ) =>
    dispatch(
      registerUser({ firstName, lastName, email, password }, onSuccess, onError)
    ),
});
export default connect(null, mapDispatchprops)(RegisterForm);
