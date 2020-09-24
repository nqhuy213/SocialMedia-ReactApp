import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react';

const CloseIcon = styled(Icon) `
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 !important;
  background-color:  ${props => !props.basic && '#e8eaeb'};
  color: ${props => props.primary && props.theme.colors.primaryblue};
  :hover{
    background-color: ${props => props.theme.colors.lightgray};
  }
`

export default function CloseButton(props) {
  return (
    <CloseIcon primary="true" basic="true" name="close" circular onClick={props.onClick}/>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  basic: PropTypes.bool,
};

