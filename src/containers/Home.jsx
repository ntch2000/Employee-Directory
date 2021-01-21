import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeRow from "../components/EmployeeRow";

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
                  <th scope="col">Employee Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {/* maps over employees state and passes properties to EmployeeRow component */}
                {employees.map((employee) => (
                  <EmployeeRow
                    key={employee.id.value}
                    first={employee.name.first}
                    last={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    picture={employee.picture.large}
                    dob={employee.dob.date}
                  />
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
