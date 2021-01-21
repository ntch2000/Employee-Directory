import React from "react";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <table class="table">
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
                <tr>
                  <td>picture.thumbnail</td>
                  <td>Name.first name.last</td>
                  <td>Phone</td>
                  <td>Email</td>
                  <td>DoB.date</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
