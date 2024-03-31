import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

const LoginForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("jhihii");
      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        {
          email,
          password,
        }
      );
      const loginUser = await response.data.data;
      setCurrentUser(loginUser);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className=" min-h-screen h-full  bg-[#F88484] text-[#282828] rounded-l-3xl">
      <div className="max-w-80 mx-auto font-bold">
        <div className=" pt-12 pb-10 text-center  text-4xl">
          <p>Login To</p>
        </div>
        <div className="pb-10">
          <form className="flex flex-col gap-2 text-xl font-semibold pb-2">
            <label htmlFor="email" className="pl-1">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" rounded-lg py-1 text-lg font-semibold px-2"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label htmlFor="password" className="pl-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className=" rounded-lg py-1 text-lg font-semibold px-2"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#EF4747] to-[#EF6A6A] py-2 mt-5 rounded-xl
               text-white font-medium shadow-lg hover:from-[#EF6A6A] hover:to-[#EF4747]"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <p className="text-center font-semibold">
            Don't have an account?{" "}
            <span className="text-white">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
