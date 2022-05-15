import React, {useContext, useState, useEffect, useRef} from 'react';
import {Alert, BackHandler} from 'react-native';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwitchToggle from 'react-native-switch-toggle';
import Context from '../../../Context';
import {DeleteRemove, GetView} from '../../Datas';
import {useIsFocused} from '@react-navigation/native';

const ViewPage = ({navigation}) => {
  const context = useContext(Context);
  const screenFocused = useIsFocused();
  const [viewData, setViewData] = useState([]);
  const [idArr, setIdArr] = useState([]);

  useEffect(() => {
    if (screenFocused === true) {
      context.setLoading(true);
      getData();
    }
  }, [screenFocused]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('경고', '앱을 종료하시겠습니까?', [
        {
          text: '실수로 누름',
          onPress: () => null,
        },
        {text: '응 나갈거야~', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const getData = async () => {
    context.setLoading(true);
    setViewData(await GetView());
    context.setLoading(false);
  };

  const changeDarkHandler = async () => {
    context.setDark(!context.getDark);
    await AsyncStorage.setItem('darkmode', context.getDark ? 'light' : 'dark');
  };

  const removeHandler = async (rowMap, id, isIdx) => {
    if (isIdx != -1) setIdArr(idArr.filter((v, idx) => idx != isIdx));
    else setIdArr(idArr => [...idArr, id]);
    rowMap[id].closeRow();
  };

  const removeExeHandler = async () => {
    Alert.alert('경고', `총 ${idArr.length}개의 기억을 지우시겠습니까?`, [
      {
        text: '아니오',
        onPress: () => {
          getData();
        },
      },
      {
        text: '예',
        onPress: async () => {
          context.setLoading(true);
          for (let i = 0; i < idArr.length; i++) {
            await DeleteRemove(idArr[i]);
          }
          setIdArr([]);
          getData();
        },
      },
    ]);
  };

  return (
    <Common.Wrapper>
      <Common.SpaceView>
        <Common.Title>Time Memory</Common.Title>
        <Common.SubTitle>원하는 시간을 기록하세요!</Common.SubTitle>
        <Styles.SwitchBox>
          <Styles.CountText>현재 기억 수: {viewData.length}</Styles.CountText>
          <Styles.SwitchSec>
            <Styles.SwitchText>다크모드</Styles.SwitchText>
            <SwitchToggle
              switchOn={context.getDark}
              onPress={changeDarkHandler}
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
        {viewData.length === 0 ? (
          <Styles.NoneItemBox>
            <Styles.NoneCenterText>No Record</Styles.NoneCenterText>
            <Styles.NoneDownText>
              아래 버튼을 눌러 시간을 기록하세요.
            </Styles.NoneDownText>
          </Styles.NoneItemBox>
        ) : (
          <Styles.ScrollView
            keyExtractor={item => item.id}
            listViewRef={ref => (scrollRef = ref)}
            data={viewData}
            closeOnRowPress={true}
            renderItem={data => (
              <Common.ItemBox
                style={
                  idArr.indexOf(data?.item?.id) != -1
                    ? Common.ShadowStyle.selected
                    : Common.ShadowStyle.original
                }>
                <Common.ItemBoxTop>
                  <Common.ItemBoxText>{data?.item?.date}</Common.ItemBoxText>
                  <Common.ItemBoxText time>
                    {data?.item?.time}
                  </Common.ItemBoxText>
                </Common.ItemBoxTop>
                <Common.ItemBoxBottom>
                  <Common.ItemBoxTitle>
                    {data?.item?.context}
                  </Common.ItemBoxTitle>
                </Common.ItemBoxBottom>
              </Common.ItemBox>
            )}
            renderHiddenItem={(rowData, rowMap) => (
              <Styles.ItemRemoveView>
                <Styles.ItemRemove
                  remove={idArr.indexOf(rowData.item.id) != -1}
                  onPress={() => {
                    removeHandler(
                      rowMap,
                      rowData.item.id,
                      idArr.indexOf(rowData.item.id),
                    );
                  }}>
                  <Styles.ItemRemoveText>
                    {idArr.indexOf(rowData.item.id) != -1 ? '취소' : '삭제'}
                  </Styles.ItemRemoveText>
                </Styles.ItemRemove>
              </Styles.ItemRemoveView>
            )}
            rightOpenValue={-108}
            disableRightSwipe={true}
          />
        )}
        <Common.MoveBtn
          onPress={
            idArr.length === 0
              ? () => navigation.navigate('Create')
              : removeExeHandler
          }>
          <Common.MoveBtnText>
            {idArr.length === 0 ? '클릭하여 기록 생성하기' : '삭제하기'}
          </Common.MoveBtnText>
        </Common.MoveBtn>
      </Styles.ContentBox>
    </Common.Wrapper>
  );
};

export default ViewPage;
