import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const EditProfileImageButton = styled(Button)`
  position: relative;
  background-color: ${(props) => `${props.theme.colors.lightgray} !important`};
  bottom: 50px;
  right: -50px;
  :hover {
    background-color: ${(props) =>
      `${props.theme.colors.popupHoverBackground} !important`};
  }
`;
const ProfileImage = styled(Image)`
  border: 5px white solid;
  margin: 0 !important;
`;


export default function ProfilePicture(props) {
  return (
    <ProfileImageWrapper>
      <ProfileImage
        src={
          props.src ||
          "https://react.semantic-ui.com/images/wireframe/square-image.png"
        }
        size="small"
        circular
      />
      <EditProfileImageButton circular icon>
        <Icon name="camera" />
      </EditProfileImageButton>
      
    </ProfileImageWrapper>
  );
}

ProfilePicture.propTypes = {
  /** Image URL */
  src: PropTypes.string,
};
