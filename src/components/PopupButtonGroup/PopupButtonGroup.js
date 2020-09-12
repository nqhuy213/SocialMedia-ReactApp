import React, {useEffect, useState} from 'react';
import './PopupButtonGroup.scss';
import PropTypes from 'prop-types';
export default function PopupButtonGroup(props) {

  return (
    <div className='popup-button-group'>
      {
        props.children
      }
    </div>
  )
}

PopupButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};