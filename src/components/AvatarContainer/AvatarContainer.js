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
          <Image
            src={
              src
                ? src
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            className="avatar-img"
            size={size}
            circular
            avatar={isAvatar}
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
