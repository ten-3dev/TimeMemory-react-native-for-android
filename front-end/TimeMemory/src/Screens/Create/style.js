import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const DateTimeBox = styled.View`
  margin-bottom: 25px;
`;

export const DateTimeTitle = styled.Text`
  font-size: 17px;
  margin-top: 30px;
  color: ${props => props.theme.color.dateTimeTitle};
  font-family: 'DoHyeon-Regular';
`;

export const DateTimeText = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  color: ${props => props.theme.color.dateTime};
  font-family: 'DoHyeon-Regular';
`;

export const InputText = styled.Text`
  font-size: 17px;
  margin-bottom: 5px;
  color: ${props => props.theme.color.input};
  font-family: 'DoHyeon-Regular';
`;

export const Input = styled.TextInput`
  height: 40px;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
  font-family: 'DoHyeon-Regular';
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
  font-size: 15px;
  color: #de3535;
  font-family: 'DoHyeon-Regular';
`;

export const WarningText = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'DoHyeon-Regular';
`;

export const ContentBox = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const PreViewBox = styled.View``;

export const PreViewTitle = styled.Text`
  font-size: 13px;
  margin-bottom: 4px;
  margin-left: 8px;
  font-family: 'mainFont';
`;
