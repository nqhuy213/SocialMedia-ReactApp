import React from 'react';
import './PanelButton.scss';
import PropTypes from 'prop-types';
import GrayHoverContainer from '../GrayHoverContainer/GrayHoverContainer';
import {Icon} from 'semantic-ui-react';

export default function PanelButton(props) {
  return (
    <GrayHoverContainer>
      <div className="panel-button-container" onClick={props.onClick}>
        <div className="panel-button-icon-container">
          <Icon
            className="panel-button-icon"
            name={props.icon ? props.icon : 'facebook'}
            circular
            size="large"
          />
        </div>
        <div className="panel-button-infomation-container">
          <span className="panel-button-title-label">
            {props.title || 'title'}
          </span>
          <span className="panel-button-meta-label">{props.meta}</span>
        </div>
      </div>
    </GrayHoverContainer>
  );
}

PanelButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  onClick: PropTypes.func,
};
