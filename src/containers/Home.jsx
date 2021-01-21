import React, { useEffect, useState } from "react";
import API from "../utils/API";
import moment from "moment";

const Home = () => {
  // set state
  const [employees, setEmployees] = useState([
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Alice",
        last: "Miller",
      },
      location: {
        street: {
          number: 9812,
          name: "St. Catherine St",
        },
        city: "Belmont",
        state: "Nova Scotia",
        country: "Canada",
        postcode: "A5R 4J5",
        coordinates: {
          latitude: "-59.9869",
          longitude: "99.0660",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "alice.miller@example.com",
      login: {
        uuid: "0a95fd08-e3da-4125-8cd3-7180e3ce9435",
        username: "brownladybug189",
        password: "southpark",
        salt: "m1QeiwqV",
        md5: "200e65e423fe6be4748efc392da0407f",
        sha1: "3a448dd19bf47484fb979edcbdcb162194bde8a9",
        sha256:
          "709e7c48d79552693c9af6ac22720d5d586d780c16afa107f2fb091cc54fc859",
      },
      dob: {
        date: "1974-08-19T01:03:10.909Z",
        age: 47,
      },
      registered: {
        date: "2003-01-29T18:00:24.514Z",
        age: 18,
      },
      phone: "179-521-3880",
      cell: "045-401-2449",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/90.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
      },
      nat: "CA",
    },
  ]);

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        console.log(res.data.results);
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
                {employees.map((employee) => (
                  <tr>
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
