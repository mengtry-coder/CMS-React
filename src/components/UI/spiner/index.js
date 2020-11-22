/** @format */

import React from "react";
import { Spin } from "antd";
import PropType from "prop-types";
const propTypes = {
  size: PropType.oneOfType([PropType.string, PropType.node, PropType.object]),
};
const Spiner = ({ size }) => {
  return <Spin size={size} />;
};
Spiner.propTypes = propTypes;
export default Spiner;
