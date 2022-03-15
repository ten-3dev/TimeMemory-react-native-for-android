import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 2;
  display: ${props => {
    if (props.display === true) return 'flex';
    return 'none';
  }};
`;

export const CustomGiF = styled.Image`
  width: 60px;
  height: 60px;
`;

export const LoadingText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: black;
`;
