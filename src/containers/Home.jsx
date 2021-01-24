import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow/EmployeeRow";

const Home = () => {
  // employees state
  const [employees, setEmployees] = useState([]);

  // filter order state
  const [sortOrder, setSortOrder] = useState("");

  // search order state
  const [searchEmployees, setSearchEmployees] = useState([]);

  // makes API call when page loads
  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        //console.log(res.data.results);
        setEmployees(res.data.results);
        setSearchEmployees(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // sort function for ascending and descending order
  const sortBy = () => {
    let sortedEmployees = [];

    // sorts the data in ascending order
    if (!sortOrder || sortOrder === "ascending") {
      sortedEmployees = [...searchEmployees].sort((a, b) =>
        a.name.first < b.name.first ? -1 : 1
      );
      setSortOrder("descending");

      // sorts data in descending order
    } else {
      sortedEmployees = [...searchEmployees].sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      setSortOrder("ascending");
    }
    // console.log("test");
    // console.log(sortedEmployees);
    //setEmployees(sortedEmployees);
    setSearchEmployees(sortedEmployees);
  };

  // search employees function
  const search = (e) => {
    const value = e.target.value;
    // console.log(`value: ${value}`);

    let filteredEmployees = searchEmployees.filter((employee) => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase());
    });

    setSearchEmployees(filteredEmployees);

    // resets the employees array to the original API call data
    if (value === "") {
      setSearchEmployees(employees);
      //console.log(employees);
    }
    // console.log("filtered");
    // console.log(filteredEmployees);
    // //console.log(searchEmployees);
    // console.log("employees");
    // console.log(employees);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2 pt-3">
          <div className="text-center">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={search}
            />
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
                {searchEmployees.map((employee) => (
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
