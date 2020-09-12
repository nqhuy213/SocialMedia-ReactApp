import React from 'react';
import './GrayHoverContainer.scss';
import PropTypes from 'prop-types';
export default function GrayHoverContainer(props) {
  return (
    <div className='gray-hover-container'>
      {props.children}
    </div>
  )
}
GrayHoverContainer.propTypes = {
  children: PropTypes.element.isRequired,
};