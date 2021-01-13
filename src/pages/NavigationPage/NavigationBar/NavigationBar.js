import React, { useState } from 'react';
import './NavigationBar.scss';
import logo from './logo.png';
import {Search, Button, Icon, Image} from 'semantic-ui-react';
import TabBar from './TabBar/TabBar';
import PopupButton from '../../../components/PopupButton/PopupButton';
import PopupButtonGroup from '../../../components/PopupButtonGroup/PopupButtonGroup';
import AccountPanel from '../Panels/AccountPanel/AccountPanel';
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import AvatarContainer from '../../../components/AvatarContainer/AvatarContainer';

const AvatarButton = styled.div`
  position: relative !important;
  border-radius: 20px;
  padding-right: 10px;
  padding-left: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 600;
  margin-left: 10px !important;
  margin-right: 10px !important;
  :hover{
    background-color: ${props => props.selected ? props.theme.colors.deEmphasizedBlueHoverButton : props.theme.colors.popupHoverBackground};
    cursor: pointer;
  }
  background-color: ${props => props.selected ? props.theme.colors.deEmphasizedBlueButton : 'transparent'};
  color: ${props => props.selected ? props.theme.colors.primaryblue : 'black'}
`

export default function NavigatioBar({activePage, handleChangePage}) {
  const user = useSelector((state) => state.Auth.user)
  const [profilePage, setProfilePage] = useState()

  const handleOnClickProfileButton = (e) => {
    
    setProfilePage(true)

  }

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
        
        {user ? 
          <AvatarButton icon labelPosition="left" circular onClick={handleOnClickProfileButton} selected={profilePage}>
            <Image src={"https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar/>
            {user.firstName} 
          </AvatarButton>
          :
          null
        }
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
