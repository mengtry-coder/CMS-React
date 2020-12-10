/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
};
function loginLayout({ children, className }) {
  const Container = styled.body`
    background: "red";
  `;
  return <div className={className}>{children}</div>;
}
loginLayout.propTypes = propTypes;
export default loginLayout;
