import React, { useRef } from 'react';
import {Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function AddFileSection(props) {
  const imageInputRef = useRef(null)

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader()
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = () => {
      if(reader.readyState == 2) {
        props.handleImageChosen(reader.result)
      }
    }
    e.target.value= null
  }

  const clickImageInput = (e) => {
    imageInputRef.current.click()
  }

  return (
    <Wrapper>
      
      <Heading>Add to Your Post</Heading>
      <IconWrapper>
        <FileIcon size="large" name="video" color="violet" circular onClick={() => {}}/>

        <FileIcon size="large" name="images" color="green" circular onClick={clickImageInput}/>
        <FileInput type="file" id="img" name="img" accept="image/*" ref={imageInputRef} onChange={handleImageChange}/>

        <FileIcon size="large" name="tags" color="blue" circular onClick={() => {}}/>
        <FileIcon size="large" name="point" color="red" circular onClick={() => {}}/>
      </IconWrapper>
    </Wrapper>
  );
}

AddFileSection.propTypes = {
  postImage: PropTypes.string,
  handleImageChosen: PropTypes.func,
};

const Wrapper = styled.section`
  border: 1px solid lightgrey;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h4`
  margin: 0;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const FileIcon = styled(Icon)`
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 !important;
  :hover{
    background-color: #f0f2f5;
  }
`;

const FileInput = styled.input `
  display: none;
`
