import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GrayContainer = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 6px;
  border-radius: 10px;
  width: ${props => props.fitted ? 'none' : '100%'};
  padding-right: ${props => props.fitted ? '6px' : 'none'};
  :hover {
    background-color:  rgba(204, 204, 204, 0.2);
    cursor: pointer;
  }
`;
export default function GrayHoverContainer(props) {
  return <GrayContainer onClick={props.onClick} fitted={props.fitted}>{props.children}</GrayContainer>;
}
GrayHoverContainer.propTypes = {
  children: PropTypes.element.isRequired,
  fitted: PropTypes.bool,
  onClick: PropTypes.func,
};
