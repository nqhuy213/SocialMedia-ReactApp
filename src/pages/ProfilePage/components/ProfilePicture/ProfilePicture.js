import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";
import AvatarContainer from "../../../../components/AvatarContainer/AvatarContainer";

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
  width: 150px !important;
  height: 150px !important;
`;

const ProfileImageInput = styled.input `
  display: none
`

export default function ProfilePicture(props) {

  const imageInputRef = useRef(null)

  const handleImageChange = (e) => {
    props.handleImageChosen()
  }

  const clickImageInput = (e) => {
    imageInputRef.current.click()
  }
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
      {props.auth == 'w' ? 
        <>
          <EditProfileImageButton circular icon onClick={props.openProfileImageForm}>
            <Icon name="camera" />
          </EditProfileImageButton> 
        </> 
          : null

      }
      
      
    </ProfileImageWrapper>
  );
}

ProfilePicture.propTypes = {
  /** Image URL */
  src: PropTypes.string,
};
