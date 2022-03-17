import React, {useContext, useState, useRef} from 'react';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import {Switch} from 'react-native-switch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../../Context';

const ViewPage = ({scrollTo}) => {
  const context = useContext(Context);
  let scrollRef = useRef(null);

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

  const scrollToTop = () => {
    scrollRef.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };

  return (
    <>
      <Common.Wrapper>
        <Common.Title>Time Memory</Common.Title>
        <Common.SubTitle>원하는 시간을 기록하세요!</Common.SubTitle>
        <Common.SwitchBox>
          <Common.SwitchSec>
            <Common.SwitchText>다크모드</Common.SwitchText>
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
          </Common.SwitchSec>
        </Common.SwitchBox>
        <Styles.RemoveBar
          colors={['#fff', '#FF5858']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
        />
        <Styles.RemoveBarText>슬라이드로 삭제하기</Styles.RemoveBarText>
        <Styles.ContentBox>
          <Styles.ScrollView
            listViewRef={ref => (scrollRef = ref)}
            data={data}
            renderItem={itemData => (
              <>
                <Styles.ItemBox>
                  <Styles.ItemBoxTop>
                    <Styles.ItemBoxText>
                      {itemData.item.date}
                    </Styles.ItemBoxText>
                    <Styles.ItemBoxText time>
                      {itemData.item.time}
                    </Styles.ItemBoxText>
                  </Styles.ItemBoxTop>
                  <Styles.ItemBoxBottom>
                    <Styles.ItemBoxTitle>
                      {itemData.item.text}
                    </Styles.ItemBoxTitle>
                  </Styles.ItemBoxBottom>
                </Styles.ItemBox>
                {itemData.index === data.length - 1 && (
                  <Styles.ToTop onPress={scrollToTop}>
                    <Styles.ToTopText>To Top</Styles.ToTopText>
                  </Styles.ToTop>
                )}
              </>
            )}
            renderHiddenItem={() => (
              <Styles.ItemRemoveView>
                <Styles.ItemRemove>
                  <Styles.ItemRemoveText>삭제</Styles.ItemRemoveText>
                </Styles.ItemRemove>
              </Styles.ItemRemoveView>
            )}
            rightOpenValue={-103}
            disableRightSwipe={true}
          />
        </Styles.ContentBox>
      </Common.Wrapper>
      <Common.MoveBtn onPress={() => scrollTo('create')}>
        <Common.MoveBtnText>클릭하여 기록 생성하기</Common.MoveBtnText>
      </Common.MoveBtn>
    </>
  );
};
export default ViewPage;
