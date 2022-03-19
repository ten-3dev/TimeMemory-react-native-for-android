import React from 'react';
import {Platform} from 'react-native';
import * as Styles from './style';
import * as Common from '../../Styles/common';

const CreatePage = ({navigation}) => {
  return (
    <Common.Wrapper>
      <Common.SpaceView>
        <Common.Title>기록 생성하기</Common.Title>
        <Common.SubTitle>
          간단한 텍스트와 함께 시간을 기록하세요.
        </Common.SubTitle>
        <Styles.DateTimeBox>
          <Styles.DateTimeTitle>현재 날짜 및 시간</Styles.DateTimeTitle>
          <Styles.DateTimeText>2020.03.21</Styles.DateTimeText>
          <Styles.DateTimeText>오후 3시 21분</Styles.DateTimeText>
        </Styles.DateTimeBox>
        <Styles.InputText>간단한 텍스트</Styles.InputText>
        <Styles.Input
          placeholder="지금 무얼 하고 있나요? (5자 이상 10자 이하로 작성)"
          maxLength={10}
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
              <Common.ItemBoxText>2022.03.21</Common.ItemBoxText>
              <Common.ItemBoxText time>오후 3시 28분</Common.ItemBoxText>
            </Common.ItemBoxTop>
            <Common.ItemBoxBottom>
              <Common.ItemBoxTitle>집에 도착</Common.ItemBoxTitle>
            </Common.ItemBoxBottom>
          </Common.ItemBox>
        </Styles.PreViewBox>
        <Common.MoveBtn onPress={() => navigation.goBack()}>
          <Common.MoveBtnText>뒤로 가기</Common.MoveBtnText>
        </Common.MoveBtn>
      </Styles.ContentBox>
    </Common.Wrapper>
  );
};

export default CreatePage;
