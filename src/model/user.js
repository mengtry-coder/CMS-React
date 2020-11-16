/** @format */

import PropTypes from "prop-types";
class User {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.number,
  };
  constructor(id, name, password) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}

export default User;
