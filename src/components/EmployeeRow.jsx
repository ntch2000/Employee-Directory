import React from "react";
import moment from "moment";

const EmployeeRow = (props) => {
  return (
    <tr>
      <td>
        <img src={props.picture} alt="Employee Image" />
      </td>
      <td>
        {props.first} {props.last}
      </td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{moment(props.dob).format("MM-DD-YYYY")}</td>
    </tr>
  );
};

export default EmployeeRow;
