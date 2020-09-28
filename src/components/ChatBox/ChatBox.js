import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AvatarContainer from "../AvatarContainer/AvatarContainer";
import { getUserId } from "../../utils/user";
import GrayHoverContainer from "../GrayHoverContainer/GrayHoverContainer";
import CloseButton from "../CloseButton/CloseButton";
import TextBox from "../TextBox/TextBox";
import { Icon } from "semantic-ui-react";
import ChatItem from "../ChatItem/ChatItem";

const ImageIcon = styled(Icon)`
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 !important;
  :hover {
    background-color: #f0f2f5;
  }
  color: ${(props) => props.theme.colors.primaryblue};
`;

const FileInput = styled.input`
  display: none;
`;

const ChatBoxWapprer = styled.section`
  background-color: white;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 420px;
  width: 320px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ChatBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
  padding-right: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1) !important;
`;
const CustomCloseButton = styled(CloseButton)`
  background-color: white !important;
`;
const ChatBoxFooter = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
  padding-right: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ChatSection = styled.section`
  height: 100%;
  padding-right: 20px;
  padding-left: 10px;
  overflow:scroll;
`
export default function ChatBox(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    console.log(text);
    setText(e.target.value);
  };
  const onEnterPressed = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      /** Send message */
      if (text.trim() === "") return;
      var message = {
        author: props.host._id,
        text: text
      }
      props.sendMessage({room: props.room, message})
    }
  };

  return (
    <ChatBoxWapprer>
      <ChatBoxHeader>
        <GrayHoverContainer fitted>
          <AvatarContainer
            size="mini"
            name={`${props.guest.firstName} ${props.guest.lastName}`}
          />
        </GrayHoverContainer>
        <CustomCloseButton
          primary={true}
          basic={true}
          onClick={props.onClose}
        />
      </ChatBoxHeader>
      <ChatSection>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/><ChatItem isHost/>
        <ChatItem isHost/>
        <ChatItem isHost/>

      </ChatSection>
      <ChatBoxFooter>
        <TextBox
          maxRows={5}
          rows={1}
          backgroundColor="lightgray"
          placeholder="Aa"
          onKeyDown={onEnterPressed}
          onChange={handleOnChange}
          value={text}
        />
        <ImageIcon name="images" size="large" circular />
      </ChatBoxFooter>
    </ChatBoxWapprer>
  );
}

ChatBox.propTypes = {
  /** The host (Current user) information */
  host: PropTypes.object,

  /** The guest (Receivers) information */
  guest: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  /** Recent messages to show */
  messages: PropTypes.arrayOf(PropTypes.object),

  onClose: PropTypes.func,
};

ChatBox.defaultProps = {
  host: {
    _id: "5f659cec480b0435a073729c",
    lastName: "Harvey",
    firstName: "Nguyen",
    email: "nqhuy213@gmail.com",
  },
  guest: {
    _id: "5f659cec480b0435a073729c",
    lastName: "Harvey",
    firstName: "Nguyen",
    email: "nqhuy213@gmail.com",
  },
};
