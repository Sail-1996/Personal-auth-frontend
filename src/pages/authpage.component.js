import React from "react";
import LoginForm from "../components/login.component";
import RegisterForm from "../components/register.component";
export default function AuthPage() {
  return (
    <div className="row justify-content-between">
      <div className="col-md-5">
        <LoginForm />
      </div>
 
      <div className="col-md-6">
        <RegisterForm />
      </div>
    </div>
  );
}
