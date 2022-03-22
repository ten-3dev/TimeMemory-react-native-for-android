import React, {useContext, useState} from 'react';
import {Platform} from 'react-native';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwitchToggle from 'react-native-switch-toggle';
import Context from '../../../Context';

const ViewPage = ({navigation}) => {
  const context = useContext(Context);

  // Fake data
  const [data] = useState([
    {text: '123', date: '2022.03.21', time: '오후 3시 28분'},
    {text: '456', date: '2022.03.21', time: '오후 3시 28분'},
    {text: '789', date: '2022.03.21', time: '오후 3시 28분'},
    {text: '789', date: '2022.03.21', time: '오후 3시 28분'},
    {text: '789', date: '2022.03.21', time: '오후 3시 28분'},
    {text: '789', date: '2022.03.21', time: '오후 3시 28분'},
    {text: '789', date: '2022.03.21', time: '오후 3시 28분'},
  ]);

  return (
    <Common.Wrapper>
      <Common.SpaceView>
        <Common.Title>Time Memory</Common.Title>
        <Common.SubTitle>원하는 시간을 기록하세요!</Common.SubTitle>
        <Styles.SwitchBox>
          <Styles.SwitchSec>
            <Styles.SwitchText>다크모드</Styles.SwitchText>
            <SwitchToggle
              switchOn={context.getDark}
              onPress={() => {
                context.setDark(!context.getDark);
                AsyncStorage.setItem(
                  'darkmode',
                  context.getDark ? 'dark' : 'light',
                );
              }}
              circleColorOff="#fff"
              circleColorOn="#fff"
              backgroundColorOn="#E9E8E8"
              backgroundColorOff="#E9E8E8"
              containerStyle={Styles.SwitchStyle.containerStyle}
              circleStyle={Styles.SwitchStyle.circleStyle}
            />
          </Styles.SwitchSec>
        </Styles.SwitchBox>
        <Styles.RemoveBar
          colors={['#fff', '#FF5858']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
        />
        <Styles.RemoveBarText>슬라이드로 삭제하기</Styles.RemoveBarText>
      </Common.SpaceView>
      <Styles.ContentBox>
        <Styles.ScrollView
          listViewRef={ref => (scrollRef = ref)}
          data={data}
          renderItem={itemData => (
            <>
              <Common.ItemBox style={Platform.select(Common.ShadowStyle)}>
                <Common.ItemBoxTop>
                  <Common.ItemBoxText>{itemData.item.date}</Common.ItemBoxText>
                  <Common.ItemBoxText time>
                    {itemData.item.time}
                  </Common.ItemBoxText>
                </Common.ItemBoxTop>
                <Common.ItemBoxBottom>
                  <Common.ItemBoxTitle>
                    {itemData.item.text}
                  </Common.ItemBoxTitle>
                </Common.ItemBoxBottom>
              </Common.ItemBox>
            </>
          )}
          renderHiddenItem={() => (
            <Styles.ItemRemoveView>
              <Styles.ItemRemove>
                <Styles.ItemRemoveText>삭제</Styles.ItemRemoveText>
              </Styles.ItemRemove>
            </Styles.ItemRemoveView>
          )}
          rightOpenValue={-108}
          disableRightSwipe={true}
        />
        <Common.MoveBtn onPress={() => navigation.navigate('Create')}>
          <Common.MoveBtnText>클릭하여 기록 생성하기</Common.MoveBtnText>
        </Common.MoveBtn>
      </Styles.ContentBox>
    </Common.Wrapper>
  );
};

export default ViewPage;
