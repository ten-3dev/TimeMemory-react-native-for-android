import React, {useContext} from 'react';
import * as Styles from './style';
import * as Common from '../../Styles/common';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../../Context';

const ViewPage = ({scrollTo}) => {
  const context = useContext(Context);
  return (
    <Common.Wrapper>
      <Button
        title="change theme"
        onPress={() => {
          AsyncStorage.setItem('darkmode', 'dark');
          context.setDark();
        }}
      />
      <Button
        title="change theme light"
        onPress={() => {
          AsyncStorage.setItem('darkmode', 'light');
          context.setDark();
        }}
      />
    </Common.Wrapper>
  );
};
export default ViewPage;
