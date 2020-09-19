import React from 'react'
import PropTypes from 'prop-types'
import { StyledSegment } from '../../styles/shared'
import styled from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea/lib'

const StyledTextBox = styled(
  ({ backgroundColor, ...props }) => (
    <TextareaAutosize {...props} />
  )
)`
  border: none;
  resize: none;
  padding: 0;
  background-color: transparent;
  color: ${(props) => {
    console.log(props.theme);
    switch (props.color) {
      case 'darkgray':
        return 'black !important'
      case 'darkblue':
        return 'white'
      default:
        return 'inherit'
    }
  }};
  width: ${(props) => props.width};
  font-family: ${(props) =>
    props.theme.typography.fontFamily};
  font-size: ${(props) =>
    props.theme.typography.pxToRem(15)};
  overflow: hidden;
  :focus {
    outline: none;
  }
`

function TextBox(props) {
  const {
    backgroundColor,
    width,
    rows,
    className,
    maxRows,
    fluid
  } = props

  return (
      <StyledSegment color={backgroundColor} fluid={fluid}>
        <StyledTextBox
          color={backgroundColor}
          className={className}
          width={width}
          rows={rows || 1}
          maxRows={maxRows}
          {...props}
        />
      </StyledSegment>
  )
}

TextBox.propTypes = {
  /**
   * A textbox can have different background colors.
   */
  backgroundColor: PropTypes.oneOf([
    'lightgray',
    'lightblue',
    'darkblue',
    'darkgray'
  ]),

  /**
   * Additional classes.
   */
  className: PropTypes.string,

  /**
   * A textbox can take the width of its container.
   */
  fluid: PropTypes.any,

  /**
   * A textbox can have a maximum number of rows to display.
   */
  maxRows: PropTypes.any,

  /**
   * A textbox can have an initial number of rows.
   */
  rows: PropTypes.number,

  /** Specify the width of the textbox. */
  width: PropTypes.string
}

TextBox.defaultProps = {
  width: '200px',
  backgroundColor: 'lightgray'
}

export default TextBox
