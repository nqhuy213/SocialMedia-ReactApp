import React, {Fragment, useEffect} from 'react';
import './AccountPanel.scss';
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import {Divider, Segment} from 'semantic-ui-react';
import AvatarContainer from '../../../../components/AvatarContainer/AvatarContainer';
import GrayHoverContainer from '../../../../components/GrayHoverContainer/GrayHoverContainer';
import PanelButton from '../../../../components/PanelButton/PanelButton';
import {logoutSuccess} from '../../../../redux/actions/auth'
import {getUserId} from '../../../../utils/user'
import { closeSocket } from '../../../../redux/actions/socket';

export default function AccountPanel(props) {
  const user = useSelector(state => state.Auth.user)
  const socket = useSelector(state => state.Socket.socket)
  const dispatch = useDispatch()

  useEffect(() => {

  },[socket])

  const handleLogOut = () => {
    // socket.emit('user_logout', {userId: getUserId()})
    dispatch(logoutSuccess())
    dispatch(closeSocket(socket))
    localStorage.removeItem('token')
    window.location.reload()
  }


  return (
    <Fragment>
      <GrayHoverContainer>
        <AvatarContainer meta="View your profile" size="tiny" />
      </GrayHoverContainer>
      <Divider className="custom-divider" />
      <PanelButton
        icon="comment alternate"
        title="Provide feedback"
        meta="Help us improve the new Facebook"
      />
      <Divider className="custom-divider" />
      <PanelButton icon="setting" title="Settings & Privacy" />
      <PanelButton icon="question circle" title="Help & Support" />
      <PanelButton
        icon="arrow alternate circle left"
        title="Switch to Classic Facebook for 48 Hours"
        meta="Starting in September, the classic Facebook will no longer be available"
      />
      <PanelButton icon="log out" title="Log Out" onClick={handleLogOut}/>
    </Fragment>
  );
}

AccountPanel.propTypes = {
};
