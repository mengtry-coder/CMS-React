/** @format */

import PropTypes from "prop-types";
class Users {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    password: PropTypes.number,
    address: PropTypes.string,
  };
  constructor(id, name, email, phone, created_date, avatar, address, uid) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
    this.created_date = created_date;
    this.address = address;
    this.uid = uid;
  }
}
Users.propTypes = PropTypes;
export default Users;
