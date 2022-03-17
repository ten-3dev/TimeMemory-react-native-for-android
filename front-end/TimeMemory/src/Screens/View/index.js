import React, {useContext} from 'react';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import {View} from 'react-native';
import {Switch} from 'react-native-switch';
import Context from '../../../Context';

const ViewPage = ({scrollTo}) => {
  const context = useContext(Context);

  return (
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
            }}
            circleSize={22}
            barHeight={30}
            circleBorderWidth={0}
            backgroundActive={'#E9E8E8'}
            backgroundInactive={'#E9E8E8'}
            circleActiveColor={'#fff'}
            circleInActiveColor={'#fff'}
            innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}}
            renderActiveText={true}
            renderInActiveText={true}
            switchLeftPx={5}
            switchRightPx={5}
            switchWidthMultiplier={2.8}
            switchBorderRadius={30}
          />
        </Common.SwitchSec>
      </Common.SwitchBox>
    </Common.Wrapper>
  );
};
export default ViewPage;
