import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.color.title};
  margin-top: 5px;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.color.title};
  margin-top: 5px;
`;

export const SwitchText = styled.Text`
  font-size: 9px;
  font-weight: bold;
  color: ${props => props.theme.color.title};
  margin-top: 5px;
  margin-bottom: 3px;
`;

export const SwitchBox = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const SwitchSec = styled.View`
  align-items: center;
`;

export const MoveBtn = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.color.btn};
  align-items: center;
  justify-content: center;
`;

export const MoveBtnText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;
