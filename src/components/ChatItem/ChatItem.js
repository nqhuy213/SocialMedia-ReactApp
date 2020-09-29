import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'
import AvatarContainer from '../AvatarContainer/AvatarContainer'

const GChatItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction:row;
  margin: 10px 0px;

`
const HChatItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction:column;
  margin: 10px 0px;
`

const ChatTextHolder = styled(Segment)`
  margin: 0 !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  background-color: ${props => props.host ? props.theme.colors.primaryblue : props.theme.colors.lightgray} !important;
  border: none !important;
  border-radius: 15px !important;
  box-shadow: none !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center;
  width: fit-content;
  max-width: 70%;
  color: ${props => props.host ? 'white' : 'black'};
  word-break: break-word;
  margin-bottom: ${props => props.host ? '0px' : '5px !important'};
`


export default function ChatItem(props) {
  const {host} = props
  if(host){
    return(
      <HChatItemWrapper>
        <ChatTextHolder host="true">
          {props.text}
        </ChatTextHolder>
      </HChatItemWrapper>
    )
  }else{
    return(
      <GChatItemWrapper>
        <AvatarContainer isAvatar/>
        <ChatTextHolder>
          {props.text}
        </ChatTextHolder>
      </GChatItemWrapper>
    )
  }
}

ChatItem.propTypes = {
  host: PropTypes.bool,
}