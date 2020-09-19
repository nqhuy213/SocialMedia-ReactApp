import styled from 'styled-components'

export const StyledSegment = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => {
    return props.theme.colors[props.color]
  }};
  border-radius: 15px;
  width: ${(props) => !props.fluid && 'fit-content'};
  height: 'fit-content';
`
