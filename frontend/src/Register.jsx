import React from "react";
import RegisterForm from "./components/RegisterForm";
import RegisterLanding from "./components/RegisterLanding";

const Register = () => {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-5">
        <RegisterLanding />
      </div>
      <div className=" col-span-7">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
