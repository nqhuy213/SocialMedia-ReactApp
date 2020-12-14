import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea/lib'
import { Button, Icon } from 'semantic-ui-react'


export const CustomSegment = styled.section`
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => {
    return props.theme.colors[props.color]
  }};
  border-radius: 15px;
  width: ${(props) => !props.fluid && 'fit-content'};
  height: 'fit-content';
  display: flex;
  align-items:center;
`

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
const CustomEmojiIcon = styled(Icon)`
  color: ${props => props.theme.colors.primaryblue};
`
const CustomEmojiButton = styled(Button)`
  margin: 0px !important;
  background-color: transparent !important;
  padding: 0.5rem !important;
  :hover{
    background-color:  rgba(204, 204, 204, 0.2) !important;
    cursor: pointer;
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
      <CustomSegment color={backgroundcolor} fluid={fluid}>
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
        <CustomEmojiButton icon circular onClick={props.handleEmojiButtonClick}>
          <CustomEmojiIcon name='smile' size='large'/>
        </CustomEmojiButton>
      </CustomSegment>
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
