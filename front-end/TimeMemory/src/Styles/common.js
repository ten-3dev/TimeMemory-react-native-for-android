import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.bg};
  box-sizing: border-box;
  padding-top: 10px;
`;

export const SpaceView = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.color.title};
  margin-top: 5px;
  font-family: 'mainFont';
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.color.title};
  margin-top: 5px;
  font-family: 'DoHyeon-Regular';
`;

export const ItemBox = styled.View`
  width: ${Dimensions.get('window').width - 16}px;
  height: 97px;
  border-radius: 5px;
  background-color: ${props => props.theme.color.item};
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 12px;
  align-self: center;
`;

export const ItemBoxTop = styled.View`
  width: 100%;
  height: 25px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ItemBoxTopDate = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ItemBoxText = styled.Text`
  font-size: ${props => {
    if (props.time) return '14px';
    return '18px';
  }};
  color: ${props => props.theme.color.title};
  font-family: 'DoHyeon-Regular';
`;

export const ItemBoxBottom = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ItemBoxTitle = styled.Text`
  font-size: 25px;
  color: ${props => props.theme.color.title};
  margin-top: -25px;
  font-family: 'DoHyeon-Regular';
`;

export const MoveBtn = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.color.btn};
  align-items: center;
  justify-content: center;
`;

export const MoveBtnText = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'DoHyeon-Regular';
`;

export const ShadowStyle = {
  selected: {
    elevation: 5,
    shadowColor: 'red',
  },
  original: {
    elevation: 5,
  },
};
