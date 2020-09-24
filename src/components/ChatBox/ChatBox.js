import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AvatarContainer from '../AvatarContainer/AvatarContainer'
import { getUserId } from '../../utils/user'
import GrayHoverContainer from '../GrayHoverContainer/GrayHoverContainer'
import CloseButton from '../CloseButton/CloseButton'
import TextBox from '../TextBox/TextBox'

const ChatBoxWapprer = styled.section`
  background-color: white;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),
    0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 450px;
  width: 330px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ChatBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px ;
  padding-bottom:3px;
  padding-left: 3px;
  padding-right: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .1) !important;
`
const CustomCloseButton = styled(CloseButton)`
  background-color: white !important;
`
const ChatBoxFooter = styled.div``

export default function ChatBox(props) {
  return (
    <ChatBoxWapprer>
      <ChatBoxHeader>
        <GrayHoverContainer fitted>
          <AvatarContainer size='mini' name={`${props.guest.firstName} ${props.guest.lastName}`}/>
        </GrayHoverContainer>
        <CustomCloseButton primary={true} basic={true}/>
      </ChatBoxHeader>
      
      <ChatBoxFooter>
        <TextBox maxRows={5} rows={1} backgroundColor='lightGray' placeholder='Aa'/>
      </ChatBoxFooter>
    </ChatBoxWapprer>
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

ChatBox.defaultProps = {
  host: {
    _id:"5f659cec480b0435a073729c",
    lastName:"Harvey",
    firstName:"Nguyen",
    email:"nqhuy213@gmail.com",
  },
  guest: {
    _id:"5f659cec480b0435a073729c",
    lastName:"Harvey",
    firstName:"Nguyen",
    email:"nqhuy213@gmail.com",
  }
}