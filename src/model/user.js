/** @format */

import PropTypes from "prop-types";
class User {
  static PropTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    password: PropTypes.number,
    address: PropTypes.string,
  };
  constructor(key, name, age, email, phone, created_date, avatar, address) {
    this.key = key;
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.created_date = created_date;
    this.created_date = avatar;
    this.address = address;
  }
}
User.PropTypes = PropTypes;
export default User;
