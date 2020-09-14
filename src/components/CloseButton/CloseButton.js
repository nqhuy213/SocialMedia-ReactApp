import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react';

const CloseIcon = styled(Icon) `
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 !important;
  background-color:  #e8eaeb;
  :hover{
    background-color: #d4d4da;
  }
`

export default function CloseButton(props) {
  return (
    <CloseIcon name="close" circular onClick={props.onClick}/>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
};