import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const DateTimeBox = styled.View`
  margin-bottom: 25px;
`;

export const DateTimeTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
  color: ${props => props.theme.color.dateTimeTitle};
`;

export const DateTimeText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  color: ${props => props.theme.color.dateTime};
`;

export const InputText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => props.theme.color.input};
`;

export const Input = styled.TextInput`
  height: 35px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 12px;
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const WarningBox = styled.View`
  width: ${Dimensions.get('window').width - 16}px;
  border-radius: 5px;
  background-color: #fff;
  height: 65px;
  padding: 10px 10px;
  box-sizing: border-box;
  margin-bottom: 25px;
  justify-content: space-between;
  align-self: center;
`;

export const WarningTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #de3535;
`;

export const WarningText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #000;
`;

export const ContentBox = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const PreViewBox = styled.View``;

export const PreViewTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 8px;
`;
