import React, {useEffect, useState} from 'react';
import {Platform, ScrollView} from 'react-native';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import moment from 'moment';

const CreatePage = ({navigation}) => {
  const [date, setDate] = useState({
    time: '',
    date: '',
  });
  const [text, setText] = useState('');
  useEffect(() => {
    const time = moment().utcOffset('+09:00').format('h시 mm분,A').split(',');
    const date = moment().utcOffset('+09:00').format('YYYY.MM.DD');
    setDate({
      time: time[1] === 'PM' ? '오후 ' + time[0] : '오전 ' + time[0],
      date: date,
    });
  }, []);
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Common.Wrapper>
        <Common.SpaceView>
          <Common.Title>기록 생성하기</Common.Title>
          <Common.SubTitle>
            간단한 텍스트와 함께 시간을 기록하세요.
          </Common.SubTitle>
          <Styles.DateTimeBox>
            <Styles.DateTimeTitle>현재 날짜 및 시간</Styles.DateTimeTitle>
            <Styles.DateTimeText>{date.date}</Styles.DateTimeText>
            <Styles.DateTimeText>{date.time}</Styles.DateTimeText>
          </Styles.DateTimeBox>
          <Styles.InputText>간단한 텍스트</Styles.InputText>
          <Styles.Input
            placeholder="지금 무얼 하고 있나요? (5자 이상 10자 이하로 작성)"
            maxLength={10}
            onChangeText={e => setText(e)}
          />
        </Common.SpaceView>
        <Styles.WarningBox style={Platform.select(Common.ShadowStyle)}>
          <Styles.WarningTitle>주의 사항</Styles.WarningTitle>
          <Styles.WarningText>
            기록 생성은 현재의 시간으로 밖에 기록을 할 수 없습니다.
          </Styles.WarningText>
        </Styles.WarningBox>
        <Styles.ContentBox>
          <Styles.PreViewBox>
            <Styles.PreViewTitle>Preview</Styles.PreViewTitle>
            <Common.ItemBox style={Platform.select(Common.ShadowStyle)}>
              <Common.ItemBoxTop>
                <Common.ItemBoxText>{date.date}</Common.ItemBoxText>
                <Common.ItemBoxText time>{date.time}</Common.ItemBoxText>
              </Common.ItemBoxTop>
              <Common.ItemBoxBottom>
                <Common.ItemBoxTitle>{text}</Common.ItemBoxTitle>
              </Common.ItemBoxBottom>
            </Common.ItemBox>
          </Styles.PreViewBox>
          <Common.MoveBtn onPress={() => navigation.goBack()}>
            <Common.MoveBtnText>완료하기</Common.MoveBtnText>
          </Common.MoveBtn>
        </Styles.ContentBox>
      </Common.Wrapper>
    </ScrollView>
  );
};

export default CreatePage;
