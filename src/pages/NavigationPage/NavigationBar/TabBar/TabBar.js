import React, { Fragment, useState, useEffect } from "react";
import "./TabBar.scss";
import { Button, Icon, Divider } from "semantic-ui-react";
import { history } from "../../../../history";
import { Link } from "react-router-dom";

export default function TabBar({ activePage, handleChangePage }) {
  const [selectedTab, setSelectedTab] = useState({
    [activePage]: true,
  });

  useEffect(() => setSelectedTab({[activePage]: true}),[activePage])
  return (
    <Fragment>
      <Link to="/home" className='link-button'>
        <Button
          icon
          className={
            selectedTab.home
              ? "navbar-item tab-icon selected"
              : "navbar-item tab-icon"
          }
          name="home"
        >
          <Icon
            name="home"
            size="large"
            className={
              selectedTab.home ? "tabbar-item selected" : "tabbar-item"
            }
          />
          {selectedTab.home ? <Divider className="selected-indicator" /> : null}
        </Button>
      </Link>

      <Link to="/watch" className='link-button'>
        <Button
          icon
          className={
            selectedTab.watch
              ? "navbar-item tab-icon selected"
              : "navbar-item tab-icon"
          }
          name="watch"
        >
          <Icon
            name="youtube play"
            size="large"
            className={
              selectedTab.watch ? "tabbar-item selected" : "tabbar-item"
            }
          />
          {selectedTab.watch ? (
            <Divider className="selected-indicator" />
          ) : null}
        </Button>
      </Link>

      <Link to="marketplace" className='link-button'>
        <Button
          icon
          className={
            selectedTab.marketplace
              ? "navbar-item tab-icon selected"
              : "navbar-item tab-icon"
          }
          name="marketplace"
        >
          <Icon
            name="warehouse"
            size="large"
            className={
              selectedTab.marketplace ? "tabbar-item selected" : "tabbar-item"
            }
          />
          {selectedTab.marketplace ? (
            <Divider className="selected-indicator" />
          ) : null}
        </Button>
      </Link>

      <Link to="group" className='link-button'>
        <Button
          icon
          className={
            selectedTab.group
              ? "navbar-item tab-icon selected"
              : "navbar-item tab-icon"
          }
          name="group"
        >
          <Icon
            name="group"
            size="large"
            className={
              selectedTab.group ? "tabbar-item selected" : "tabbar-item"
            }
          />
          {selectedTab.group ? (
            <Divider className="selected-indicator" />
          ) : null}
        </Button>
      </Link>

      <Link to="game" className='link-button'>
        <Button
          icon
          className={
            selectedTab.game
              ? "navbar-item tab-icon selected"
              : "navbar-item tab-icon"
          }
          name="game"
        >
          <Icon
            name="gamepad"
            size="large"
            className={
              selectedTab.game ? "tabbar-item selected" : "tabbar-item"
            }
          />
          {selectedTab.game ? <Divider className="selected-indicator" /> : null}
        </Button>
      </Link>
    </Fragment>
  );
}
