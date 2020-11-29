/** @format */

import PropTypes from "prop-types";
class Users {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    password: PropTypes.number,
    address: PropTypes.string,
  };
  constructor(id, name, age, email, phone, created_date, avatar, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.created_date = created_date;
    this.created_date = avatar;
    this.address = address;
  }
}
Users.PropTypes = PropTypes;
export default Users;
