import styled from 'styled-components'

export const StyledSegment = styled.section`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => {
    return props.theme.colors[props.color]
  }};
  border-radius: 15px;
  width: ${(props) => !props.fluid && 'fit-content'};
  height: 'fit-content';
  display: flex;
  align-items:center
`
