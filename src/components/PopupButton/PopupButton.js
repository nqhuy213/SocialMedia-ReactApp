import React, {useState, useRef, useEffect} from 'react';
import './PopupButton.scss';
import {Button, Popup, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import OutsideAlerter from '../OursideAlerter/OutsideAlerter';

export default function PopupButton(props) {
  const [open, setOpen] = useState(false);

  const handleOnClick = (e) => {
    setOpen(!open);
  };
  const triggerButton = (
    <Icon
      name={props.icon}
      className={open ? "popup-trigger-button selected" : "popup-trigger-button"}
      circular
      onClick={handleOnClick}
      size="large"
    />
  );

  const handleOnOutsideClicked = (e) => {
    if(e.target.className.includes(props.icon)) return
    setOpen(false)
  }
  return (
    <Popup
      trigger={triggerButton}
      open={open}
      basic
      className="popup-panel-container"
    >
      <OutsideAlerter onOutsideClicked={handleOnOutsideClicked}>
        <div className="popup-panel-wrapper">{props.children}</div>
      </OutsideAlerter>
    </Popup>
  );
}

PopupButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.element,
};
