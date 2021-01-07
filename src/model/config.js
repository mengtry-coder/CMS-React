/** @format */

import PropTypes from "prop-types";
class Config {
  static propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  constructor(key, name) {
    this.key = key;
    this.name = name;
  }
}
Config.propTypes = PropTypes;
export default Config;
