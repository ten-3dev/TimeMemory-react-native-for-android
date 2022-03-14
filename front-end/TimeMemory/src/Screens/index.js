import React, {useContext} from 'react';
import * as Styles from './style';
import Context from '../../Context';
import {TouchableOpacity, Text, Button} from 'react-native';

const Main = () => {
  const context = useContext(Context);

  return (
    <Styles.Wrapper>
      <Styles.TitleText>
        {context.getContext ? 'true' : 'false'}
      </Styles.TitleText>
      <Button
        onPress={() => {
          context.setContext();
        }}
        title="Press Me!"
      />
    </Styles.Wrapper>
  );
};

export default Main;
