import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Segment } from 'semantic-ui-react'

const ChatBoxWapprer = styled(Segment)`
  
`

export default function ChatBox(props) {
  return (
    <div>
      
    </div>
  )
}

ChatBox.propTypes = {
  /** The host information */
  host: PropTypes.object,

  /** The guest information */
  guest: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),

  /** Recent messages to show */
  messages: PropTypes.arrayOf(PropTypes.object)
}

