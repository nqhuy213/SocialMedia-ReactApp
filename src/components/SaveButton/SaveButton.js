import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const SaveButt = styled(Button) `
  background-color: ${props => props.theme.colors.primaryblue} !important;
  color: white !important;
  :hover{
    background-color: ${props => props.theme.colors.primaryblueHover} !important;
  }
`
export default function SaveButton({onClick}) {
  return (
    <SaveButt onClick={onClick}>
      Save
    </SaveButt>
  )
}

SaveButton.propTypes = {
  onClick: PropTypes.bool,
}