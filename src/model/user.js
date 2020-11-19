/** @format */

import PropTypes from "prop-types";
class User {
  static PropTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.number,
    address: PropTypes.string,
  };
  constructor(key, name, email, created_date, avatar, address) {
    this.key = key;
    this.name = name;
    this.emai = email;
    this.created_date = created_date;
    this.created_date = avatar;
    this.address = address;
  }
}
User.PropTypes = PropTypes;
export default User;
