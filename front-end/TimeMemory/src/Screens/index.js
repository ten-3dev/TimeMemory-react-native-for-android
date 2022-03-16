import React, {useContext, useEffect} from 'react';
import * as Styles from './style';
import Context from '../../Context';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = () => {
  const context = useContext(Context);

  return (
    <Styles.Wrapper>
      <Styles.TitleText>{context.getDark}</Styles.TitleText>
      <Button
        onPress={() => {
          context.setLoading();
        }}
        title="Loading!!!!!"
      />

      <Button
        onPress={async () => {
          await AsyncStorage.setItem('@test', 'on');
        }}
        title={'AsyncStorage'}
        disabled={context.getDark === 'on' ? true : false}
      />
    </Styles.Wrapper>
  );
};

export default Main;
