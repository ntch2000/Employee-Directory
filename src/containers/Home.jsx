import React, { useEffect, useState } from "react";
import API from "../utils/API";
import moment from "moment";

const Home = () => {
  // set state
  const [employees, setEmployees] = useState([]);

  // makes API call when page loads
  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        console.log(res.data.results);
        setEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {/* maps over employee state and generates each row */}
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <img src={employee.picture.medium} alt="Employee Image" />
                    </td>
                    <td>
                      {employee.name.first} {employee.name.last}
                    </td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{moment(employee.dob.date).format("MM-DD-YYYY")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
