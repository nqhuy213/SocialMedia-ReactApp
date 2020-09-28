import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar from "./NavigationBar/NavigationBar";
import NewsFeedPage from "../NewsFeedPage/NewsFeedPage";
import "./NavigationPage.scss";
import WatchPage from "../WatchPage/WatchPage";
import { getUserId } from "../../utils/user";
import { fetchUser } from "../../redux/actions/auth";
import {
  deleteActiveFriend,
  fetchActiveFriends,
  updateActiveFriend,
} from "../../redux/actions/newsFeed";
import ChatSection from "../../components/ChatSection/ChatSection";
import styled from "styled-components";
import { closeChat, updateChat } from "../../redux/actions/chat";

export default function NavigationPage({ page }) {
  const [activePage, setActivePage] = useState(page);
  const socket = useSelector((state) => state.Socket.socket);
  const dispatch = useDispatch();
  const inboxes = useSelector((state) => state.Chat.inbox);

  useEffect(() => {
    if (socket) {
      socket.emit("user_login", { userId: getUserId() });
      socket.on("user_info", (user) => {
        dispatch(fetchUser(user));
      });
      socket.on("active_friends", (data) => {
        dispatch(fetchActiveFriends(data));
      });
      socket.on("friend_online", (data) => {
        dispatch(updateActiveFriend(data));
      });
      socket.on("friend_offline", ({ userId }) => {
        dispatch(deleteActiveFriend(userId));
      });

      socket.on('update_inbox', ({inbox}) => {
        dispatch(updateChat(inbox))
      })
    }
  }, [socket]);
  const handleChangePage = (page) => {
    setActivePage(page);
  };

  switch (activePage) {
    case "home":
      page = <NewsFeedPage />;
      break;
    case "watch":
      page = <WatchPage />;
      break;
    default:
      page = <NewsFeedPage />;
      break;
  }

  const ChatSectionContainer = styled.div`
    position: fixed;
    right: 0px;
    bottom: 0px;
    z-index: 10;
  `;

  const closeChatBox = (guest) => {
    dispatch(closeChat(guest))
  }
  
  const sendMessage = ({room, message}) => {
    socket.emit('send_chat', ({room, message}))
  }
  return (
    <Fragment>
      <NavigationBar
        activePage={activePage}
        handleChangePage={handleChangePage}
      />
      <div className="page-container">{page}</div>
      {inboxes.length > 0 && (
        <ChatSectionContainer>
          <ChatSection chats={inboxes} closeChatBox={closeChatBox} sendMessage={sendMessage}/>
        </ChatSectionContainer>
      )}
    </Fragment>
  );
}
