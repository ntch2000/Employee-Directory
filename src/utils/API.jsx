import axios from "axios";

export default {
  getEmployees: function () {
    return axios.get(
      "https://randomuser.me/api?nat=us&inc=id,name,phone,dob,picture,email&results=10"
    );
  },
};
