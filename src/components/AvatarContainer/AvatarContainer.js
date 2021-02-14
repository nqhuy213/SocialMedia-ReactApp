import React from "react";
import { Image } from "semantic-ui-react";
import "./AvatarContainer.scss";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ALink = styled(Link)`
  text-decoration: none;
  color: initial;
  :hover{
    text-decoration: none;
    color: initial;
  };
  
`
const AContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-top: 5px;
  position: relative;
`;

const AImage = styled(Image)`
  width: ${(props) => {
    var px = 40
    var scale
    switch(props.size){
      case 'tiny':
        scale = 1
      case 'small':
        scale = 3
      default:
        scale = 1
    }
    return `${px*scale}px`
  }} !important;

  height: ${(props) => {
    var px = 40
    var scale
    switch(props.size){
      case 'tiny':
        scale = 1
      case 'small':
        scale = 3
      default:
        scale = 1
    }
    return `${px*scale}px`
  }} !important;
`

export default function AvatarContainer({
  src,
  name,
  online,
  meta,
  size,
  isAvatar,
  userId,
  disable
}) {
  return (
    <ALink to={`/profile/${userId}`} onClick={(e) => {disable && e.preventDefault()}}>
      <AContainer>
        <div className="avatar-img-container">
          <AImage
            src={
              src
                ? src
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            size={size}
            circular
          />
        </div>
        {online ? <span className="online-indicator"></span> : null}
        {name || meta ? (
          <div className="avatar-infomation-container">
            {name ? <span className="avatar-name-label">{name}</span> : null}
            <span className="avatar-meta-label">{meta}</span>
          </div>
        ) : null}
      </AContainer>
    </ALink>
  );
}

AvatarContainer.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  meta: PropTypes.string,
  online: PropTypes.bool,
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "mini",
    "medium",
    "large",
    "huge",
    "big",
  ]),
  userId: PropTypes.string,
  disable: PropTypes.bool,
};
