/** @format */
import PropTypes, { number } from "prop-types";

class Media {
  static PropTypes = {
    uid: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    isActive: number,
  };
  constructor(uid, name, status, url) {
    this.uid = uid;
    this.name = name;
    this.status = status;
    this.url = url;
    // this.type = type;
    // this.size = size;
    // this.isActive = isActive;
  }
}

export default Media;
