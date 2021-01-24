import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow/EmployeeRow";
import Search from "../components/EmployeeRow/Search/Search";
import "./Home.css";

const Home = () => {
  // employees state
  const [employees, setEmployees] = useState([]);

  // filter order state
  const [sortOrder, setSortOrder] = useState("");

  // search order state
  const [search, setSearch] = useState("");

  // makes API call when page loads
  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        //console.log(res.data.results);
        setEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // sort function for ascending and descending order
  const sortBy = () => {
    let sortedEmployees = [];

    // sorts the data in ascending order
    if (!sortOrder || sortOrder === "ascending") {
      sortedEmployees = [...employees].sort((a, b) =>
        a.name.first < b.name.first ? -1 : 1
      );
      setSortOrder("descending");

      // sorts data in descending order
    } else {
      sortedEmployees = [...employees].sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      setSortOrder("ascending");
    }
    // console.log("test");
    // console.log(sortedEmployees);
    setEmployees(sortedEmployees);
  };

  const searchEmployees = (e) => {
    let value = e.target.value;
    setSearch(value);

    console.log(value);
  };

  // search employees function

  return (
    <div>
      <div className="row header">
        <div className="col">
          <h1 className="p-3 text-center">Employee Directory</h1>
          <h5 className="p-3 text-center">
            Search for Employees by Phone number via the search box or sort
            Employees by Name.
          </h5>
          <div className="row justify-content-center">
            <div className="col-md-2 p-3 ">
              <div>
                <Search searchEmployees={searchEmployees} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Employee Picture</th>
                  <th scope="col" onClick={sortBy}>
                    Name
                  </th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {/* maps over employees state and passes properties to EmployeeRow component */}
                {employees
                  .filter((employee) =>
                    employee.phone
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())
                  )
                  .map((employee) => (
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
