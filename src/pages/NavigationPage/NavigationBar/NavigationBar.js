import React from 'react';
import './NavigationBar.scss';
import logo from './logo.png';
import {Search} from 'semantic-ui-react';
import TabBar from './TabBar/TabBar';
import PopupButton from '../../../components/PopupButton/PopupButton';
import PopupButtonGroup from '../../../components/PopupButtonGroup/PopupButtonGroup';
import AccountPanel from '../Panels/AccountPanel/AccountPanel';

export default function NavigationBar({activePage, handleChangePage}) {
  return (
    <div className="navbar-container">
      <div className="left-flex">
        <img alt="logo-image" src={logo} className="navbar-item logo-img" />
        <Search className="navbar-item search-box" />
      </div>
      <div className="middle-flex tabbar">
        <TabBar activePage={activePage} handleChangePage={handleChangePage} />
      </div>
      <div className="right-flex">
        <PopupButtonGroup>
          <PopupButton icon="bars">
            <h1>ALo</h1>
          </PopupButton>
          <PopupButton icon="facebook messenger">
            <h1>ALo</h1>
          </PopupButton>
          <PopupButton icon="bell">
            <h1>ALo</h1>
          </PopupButton>
          <PopupButton icon="caret down">
            <AccountPanel/>
          </PopupButton>
        </PopupButtonGroup>
      </div>
    </div>
  );
}
