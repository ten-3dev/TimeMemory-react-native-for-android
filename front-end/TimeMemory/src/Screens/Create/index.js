import React, {useContext, useEffect, useState} from 'react';
import {Alert, Platform, ScrollView} from 'react-native';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import moment from 'moment';
import {PostCreate} from '../../Datas';
import Context from '../../../Context';

const CreatePage = ({navigation}) => {
  const context = useContext(Context);

  const [data, setData] = useState({
    time: '',
    date: '',
    context: '',
  });

  useEffect(() => {
    const time = moment().utcOffset('+09:00').format('h시 mm분,A').split(',');
    const date = moment().utcOffset('+09:00').format('YYYY.MM.DD');
    setData({
      time: time[1] === 'PM' ? '오후 ' + time[0] : '오전 ' + time[0],
      date: date,
    });
  }, []);

  const getData = async () => {
    if (!data.context) Alert.alert('경고', '텍스트를 입력해주세요.');
    else {
      context.setLoading(true);
      await PostCreate({arg: data, navigation: navigation});
      context.setLoading(false);
    }
  };
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
            <Styles.DateTimeText>{data.date}</Styles.DateTimeText>
            <Styles.DateTimeText>{data.time}</Styles.DateTimeText>
          </Styles.DateTimeBox>
          <Styles.InputText>간단한 텍스트</Styles.InputText>
          <Styles.Input
            placeholder="지금 무얼 하고 있나요? (15자 이하로 작성)"
            maxLength={15}
            onChangeText={e =>
              setData({
                ...data,
                context: e,
              })
            }
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
                <Common.ItemBoxText>{data.date}</Common.ItemBoxText>
                <Common.ItemBoxText time>{data.time}</Common.ItemBoxText>
              </Common.ItemBoxTop>
              <Common.ItemBoxBottom>
                <Common.ItemBoxTitle>{data.context}</Common.ItemBoxTitle>
              </Common.ItemBoxBottom>
            </Common.ItemBox>
          </Styles.PreViewBox>
          <Common.MoveBtn onPress={() => getData()}>
            <Common.MoveBtnText>완료하기</Common.MoveBtnText>
          </Common.MoveBtn>
        </Styles.ContentBox>
      </Common.Wrapper>
    </ScrollView>
  );
};

export default CreatePage;
