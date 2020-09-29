import React from 'react'
import PropTypes from 'prop-types'
import { StyledSegment } from '../../styles/shared'
import styled, {css} from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea/lib'

const StyledTextBox = styled(
  ({ backgroundColor, ...props }) => (
    <TextareaAutosize {...props} />
  )
)
`
  border: none;
  resize: none;
  padding: 0;
  background-color: transparent;
  color: ${(props) => {
    switch (props.color) {
      case 'darkgray':
        return 'black !important'
      case 'darkblue':
        return 'white'
      default:
        return 'black'
    }
  }};
  width: ${(props) => props.width};
  font-family: ${(props) =>
    props.theme.typography.fontFamily};
  font-size: ${(props) =>
    props.theme.typography.pxToRem(15)};
  font-weight: 500;
  overflow: hidden;
  :focus {
    outline: none;
  }
`

const TextBox = React.forwardRef((props, ref) => {
  const {
    backgroundcolor,
    width,
    rows,
    className,
    maxRows,
    fluid
  } = props

  return (
      <StyledSegment color={backgroundcolor} fluid={fluid}>
        <StyledTextBox
          as={TextareaAutosize}
          color={backgroundcolor}
          className={className}
          width={width}
          rows={rows || 1}
          maxRows={maxRows}
          ref={ref}
          {...props}
        />
      </StyledSegment>
  )
})

TextBox.propTypes = {
  /**
   * A textbox can have different background colors.
   */
  backgroundcolor: PropTypes.oneOf([
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
  backgroundcolor: 'lightgray'
}

export default TextBox
