import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const BrowseButt = styled(Button) `
  background-color: ${props => props.theme.colors.lightgray} !important;
  color: darkgray !important;
  :hover{
    background-color: ${props => props.theme.colors.primaryblueHover} !important;
  }
`
export default function BrowseButton({onClick}) {
  return (
    <BrowseButt onClick={onClick}>
      Browse
    </BrowseButt>
  )
}

BrowseButton.propTypes = {
  onClick: PropTypes.bool,
}