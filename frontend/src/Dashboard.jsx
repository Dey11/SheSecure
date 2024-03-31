import React from "react";
import image from "./assets/fabdf33d7dc278197fd3f5086feb84f1.jpeg";
import Card from "./Card";
import { useState, useContext, useEffect } from "react";
import RecentCard from "./RecentCard";
import { Link } from "react-router-dom";
import { UserContext } from "./context/userContext";
import io from "socket.io-client";
import { SocketContext } from "./context/socketContext";

const Dashboard = () => {
  const [toggle, switchToggle] = useState(0);
  const { currentUser } = useContext(UserContext);

  const [accidents, setAccidents] = useState([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    const mySocket = socket || io("http://localhost:3000");
    console.log("Socket connected");
    mySocket.on("newAccident", (data) => {
      console.log("Accident received:", data, "received");
      data.index = accidents.length + 1;
      setAccidents((prevAccidents) => [...prevAccidents, data]);
    });

    return () => mySocket.disconnect();
  }, [socket]);

  return (
    <>
      <div className="flex justify-around m-10">
        <div className="">
          <h1 className="text-[2rem] font-bold">
            Welcome to <span className="text-[#EF7A7A]">SheSecure</span>
          </h1>
        </div>
        {currentUser?.token == null ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            {" "}
            <div className="flex justify-between gap-6 ">
              <button className="text-white bg-[#EF7A7A] px-4 py-2 rounded-lg  hover:bg-[#D07070]">
                Add Details
              </button>
              <div className="">
                <img
                  src={image}
                  alt=""
                  srcSet=""
                  className="rounded-full object-cover h-14 w-16 "
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center ">
        <div className="w-[60%] m-7 flex gap-[18rem]">
          <div className="    text-[2rem]  text-[#686666]">DashBoard</div>
          <div className="flex items-center gap-8 bg-white p-4 rounded-full relative">
            <li
              className={`list-none z-10 ${toggle === 1 ? "" : "text-white"}`}
            >
              <button onClick={() => switchToggle(0)}>Recent</button>
            </li>
            <li
              className={`list-none z-10 ${toggle === 1 ? "text-white" : ""}`}
            >
              <button onClick={() => switchToggle(1)}>Details</button>
            </li>
            <span
              className={`absolute top-1 left-1 bg-red-500 w-[5rem] h-[3rem] rounded-full 
        ${toggle === 1 ? "translate-x-20" : ""}  
         transition-all duration-700`}
            ></span>
          </div>
        </div>
      </div>
      <section className="flex justify-center">
        <div className="bg-[#FF7070] m-10 justify-center w-[60%] p-[3rem] rounded-md max-h-[30rem] overflow-auto">
          {toggle ? (
            <Card />
          ) : (
            <>
              <table className="table-auto w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-white">
                    <th>Accident Info</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Pincode</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {accidents.map((accident) => (
                    <RecentCard key={accident.index} {...accident} />
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
