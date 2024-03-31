import React from "react";

const RecentCard = (props) => {
  console.log(props, "here");
  return (
    <tr className="">
      <td className="px-6 py-4">Harrasment </td>
      <td className="px-6 py-4">12/12/2022</td>
      <td className="px-6 py-4">{props.time}</td>
      <td className="px-6 py-4">{props.state}</td>
      <td className="px-6 py-4">{props.city}</td>
      <td className="px-6 py-4">{props.pincode}</td>
    </tr>
  );
};

export default RecentCard;
