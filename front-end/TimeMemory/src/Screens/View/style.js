import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const RemoveBar = styled(LinearGradient)`
  width: 100%;
  height: 12px;
  margin-top: 8px;
  border-radius: 10px;
`;

export const RemoveBarText = styled.Text`
  width: 100%;
  text-align: right;
  font-size: 9px;
  font-weight: bold;
  color: ${props => props.theme.color.title};
  margin-top: 2px;
  margin-bottom: 6px;
`;

export const ContentBox = styled.View`
  flex: 1;
`;

export const ItemBox = styled.View`
  width: 100%;
  height: 97px;
  border-radius: 5px;
  background-color: red;
  margin-bottom: 12px;
`;

export const ToTop = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background-color: gray;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ToTopText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: whitesmoke;
`;
