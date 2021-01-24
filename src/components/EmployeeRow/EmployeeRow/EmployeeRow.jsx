import React from "react";
import moment from "moment";

const EmployeeRow = ({ picture, first, last, phone, email, dob }) => {
  const fullName = `${first} ${last}`;
  const alt = `${fullName}'s Image`;
  return (
    <tr>
      <td>
        <img src={picture} alt={alt} />
      </td>
      <td className="align-middle">{fullName}</td>
      <td className="align-middle">{phone}</td>
      <td className="align-middle">{email}</td>
      <td className="align-middle">{moment(dob).format("MM-DD-YYYY")}</td>
    </tr>
  );
};

export default EmployeeRow;
