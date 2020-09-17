import { Segment } from 'semantic-ui-react';
import styled from 'styled-components'


export const CommentItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
`

export const LikeCountWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 15px;
  bottom: -8px ;
  right: -8px
`;

export const LikeCountLabel = styled.span`
  font-size: 0.9rem;
`;

export const CommentActionItem = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: 4px;
  margin-left: 4px;
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const CommentLikeAction = styled.div`
  color: ${props => props.isLiked ? props.theme.colors.primaryBlue : props.theme.colors.darkGray};
  
`;

export const CommentReplyAction = styled.div`
  color: ${props => props.theme.colors.darkGray}
`;

export const CommentHolder = styled(Segment)`
  margin: 0 !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  background-color: ${props => props.theme.colors.lightGray} !important;
  border: none !important;
  border-radius: 17px !important;
  box-shadow: none !important;
  display: flex !important;
  flex-direction: column !important;
  width: fit-content;
`

export const CommenterNameLabel = styled.span`
  font-weight: 600;
`

export const CommentDescriptionLabel = styled.span`
  font-size: 15px;
  line-height: 20px;
  word-spacing: 1px;
  padding-bottom: 7px;

`
export const CommentActionContainer = styled.div`
  display: flex;
  padding-left: 10px;
  padding-top: 5px;
  align-items: flex-end;
`
export const DateTimeLabel = styled.span`
  font-size: 0.9rem;
  color: rgb(82, 81, 81);
`