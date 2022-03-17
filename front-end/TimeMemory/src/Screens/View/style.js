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
  font-size: 9px;
  font-weight: bold;
  color: ${props => props.theme.color.title};
  margin-top: 2px;
  margin-bottom: 6px;
`;

export const ContentBox = styled.View`
  flex: 1;
`;

export const ScrollView = styled(SwipeListView)`
  padding-bottom: 10px;
  box-sizing: border-box;
`;

export const ItemBox = styled.View`
  width: 100%;
  height: 97px;
  border-radius: 5px;
  background-color: ${props => props.theme.color.item};
  margin-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
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

export const ItemRemoveView = styled.View`
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
  font-size: 16px;
  font-weight: bold;
  color: #fff;
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
