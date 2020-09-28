import React, { useState } from "react";
import styled from "styled-components";
import ChatBox from "../ChatBox/ChatBox";
import PropTypes from "prop-types";

const ChatSectionWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
`;
const ChatBoxContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function ChatSection(props) {
  return (
    <ChatSectionWrapper>
      {props.chats.map((inbox, i) => (
        <ChatBoxContainer key={i}>
          <ChatBox
            room={inbox._id}
            host={inbox.host}
            guest={inbox.guest}
            onClose={() => {
              props.closeChatBox(inbox.guest);
            }}
            sendMessage={props.sendMessage}
          />
        </ChatBoxContainer>
      ))}
    </ChatSectionWrapper>
  );
}

ChatSection.propsTypes = {
  /** All inboxes details */
  chats: PropTypes.array,
  closeChatBox: PropTypes.func,
};
