import React, { useState } from "react";
import {connect} from "react-redux"
import { toast } from "react-toastify";
import {loginUser} from "./../redux/actions/authActionCreator"

const LoginForm = ({dispatchLoginAction}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit=(event)=>{
    event.preventDefault()
    dispatchLoginAction(email,password,()=>toast.success("Logged In Successfully!"),()=>console.log("Logged in successfully"),(message)=>toast.error(`Error:${message}`))
  }

  return (
    <>
      <h2>Have an Account ?</h2>
      <h4>Login Here</h4>
      <br />
      <form noValidate onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-2">  <button type="submit" className="btn btn-primary" style={{marginRight:"3px"}}>
        Login | <i className="fas fa-sign-in-alt"></i>

        </button>
        <button className="btn btn-outline-secondary ">
         cancel | <i className="fas fa-times"></i>
        </button></div>
      
      </form>
    </>
  );
};
const mapDispatchToProps=dispatch=>({
  dispatchLoginAction:(email,password,onSuccess,onError)=>
   dispatch(loginUser({email,password},onSuccess,onError))
})
export default connect(null,mapDispatchToProps)(LoginForm);
