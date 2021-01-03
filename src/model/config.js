/** @format */

import PropTypes from "prop-types";
class Config {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
Config.propTypes = PropTypes;
export default Config;
