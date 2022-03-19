import React, {useContext, useState} from 'react';
import {Platform} from 'react-native';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import {Switch} from 'react-native-switch';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
            <Switch
              value={context.getDark}
              onValueChange={val => {
                context.setDark(val);
                AsyncStorage.setItem('darkmode', val ? 'dark' : 'light');
              }}
              circleSize={22}
              barHeight={30}
              circleBorderWidth={0}
              backgroundActive={'#E9E8E8'}
              backgroundInactive={'#E9E8E8'}
              circleActiveColor={'#fff'}
              circleInActiveColor={'#fff'}
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              renderActiveText={true}
              renderInActiveText={true}
              switchLeftPx={5}
              switchRightPx={5}
              switchWidthMultiplier={2.8}
              switchBorderRadius={30}
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
