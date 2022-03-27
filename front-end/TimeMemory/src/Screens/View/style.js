import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {SwipeListView} from 'react-native-swipe-list-view';

export const RemoveBar = styled(LinearGradient)`
  width: 100%;
  height: 12px;
  margin-top: 8px;
  border-radius: 10px;
`;

export const RemoveBarText = styled.Text`
  width: 100%;
  text-align: right;
  font-size: 12px;
  color: ${props => props.theme.color.title};
  margin-top: 4px;
  margin-bottom: 10px;
  font-family: 'DoHyeon-Regular';
`;

export const SwitchText = styled.Text`
  font-size: 10px;
  color: ${props => props.theme.color.title};
  margin-top: 5px;
  margin-bottom: 3px;
  font-family: 'DoHyeon-Regular';
`;

export const SwitchBox = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const SwitchSec = styled.View`
  align-items: center;
`;

export const SwitchStyle = {
  containerStyle: {
    // marginTop: 16,
    width: 70,
    height: 35,
    borderRadius: 25,
    padding: 5,
  },
  circleStyle: {
    width: 26,
    height: 26,
    borderRadius: 20,
  },
};

export const ContentBox = styled.View`
  flex: 1;
`;

export const ScrollView = styled(SwipeListView)`
  padding-bottom: 10px;
  box-sizing: border-box;
`;

export const ItemRemoveView = styled.View`
  width: ${Dimensions.get('window').width - 8}px;
  height: 97px;
  align-items: flex-end;
`;

export const ItemRemove = styled.TouchableOpacity`
  width: 100px;
  height: 100%;
  background-color: #ff5858;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ItemRemoveText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  font-family: 'DoHyeon-Regular';
`;

export const NoneItemBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const NoneCenterText = styled.Text`
  margin-top: -100px;
  font-size: 25px;
  font-family: 'mainFont';
  color: ${props => props.theme.color.noRecord};
`;

export const NoneDownText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.color.title};
  font-family: 'DoHyeon-Regular';
  position: absolute;
  bottom: 40px;
`;
