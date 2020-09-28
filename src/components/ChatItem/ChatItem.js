import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'

const HChatItemWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: red;
  align-items: flex-end;
  flex-direction:column;
`

const ChatTextHolder = styled(Segment)`
  margin: 0 !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  background-color: ${props => props.theme.colors.primaryblue} !important;
  border: none !important;
  border-radius: 17px !important;
  box-shadow: none !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center;
  width: fit-content;
  color: ${props => props.isHost ? 'white' : 'black'}
`


export default function ChatItem(props) {
  const {isHost} = props
  if(isHost){
    return(
      <HChatItemWrapper>
        <ChatTextHolder isHost>
          {props.text || 'aloloalaolaolaolaoaolaol'}
        </ChatTextHolder>
      </HChatItemWrapper>
    )
  }
}

ChatItem.propTypes = {
  isHost: PropTypes.bool,
}