import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/register",
        {
          name,
          email,
          password,
          state,
          city,
          pincode,
        }
      );
       if(!response.data.data){
        console.log("Erroorr aagyi.")
       }
       navigate('/login')
    } catch (error) {
       console.log(error);
    }
  };

  return (
    <div className=" min-h-screen h-full  bg-[#F88484] text-[#282828] rounded-l-3xl">
      <div className="max-w-80 mx-auto font-bold">
        <div className=" pt-12 pb-10 text-center  text-4xl">
          <p>Create an Account</p>
        </div>
        <div className="pb-10">
          <form className="flex flex-col gap-2 text-xl font-semibold pb-2">
            <label htmlFor="name" className="pl-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" rounded-lg py-1 text-lg font-semibold px-2"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
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
            <label htmlFor="state" className="pl-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className=" rounded-lg py-1 text-lg font-semibold px-2"
              placeholder="Enter your state"
              onChange={(e) => {
                setState(e.target.value);
              }}
              value={state}
            />
            <label htmlFor="city" className="pl-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className=" rounded-lg py-1 text-lg font-semibold px-2"
              placeholder="Enter your city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
            <label htmlFor="pincode" className="pl-1">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className=" rounded-lg py-1 text-lg font-semibold px-2"
              placeholder="Enter your pincode"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              value={pincode}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#EF4747] to-[#EF6A6A] py-2 mt-5 rounded-xl
               text-white font-medium shadow-lg hover:from-[#EF6A6A] hover:to-[#EF4747]"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
          <p className="text-center font-semibold">
            Already have an account? <span className="text-white"><Link to="/login">Login</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
