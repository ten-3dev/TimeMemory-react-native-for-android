import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const SpaceView = styled.View`
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
    if (props.time) return '12px';
    return '16px';
  }};
  font-weight: bold;
  color: ${props => props.theme.color.title};
`;

export const ItemBoxBottom = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ItemBoxTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.color.title};
  margin-top: -25px;
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

export const shadowIOS = {
  shadowColor: 'rgb(50, 50, 50)',
  shadowOpacity: 0.5,
  shadowRadius: 5,
  shadowOffset: {
    height: -1,
    width: 0,
  },
};

export const ShadowStyle = {
  ios: {
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  android: {
    elevation: 3,
  },
};
