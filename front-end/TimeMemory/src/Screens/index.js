import React, {useContext} from 'react';
import * as Styles from './style';
import Context from '../../Context';
import {Button} from 'react-native';

const Main = () => {
  const context = useContext(Context);

  return (
    <Styles.Wrapper>
      <Styles.TitleText>{context.getDark ? 'true' : 'false'}</Styles.TitleText>
      <Styles.TitleText>
        {context.getLoading ? 'true' : 'false'}
      </Styles.TitleText>
      <Button
        onPress={() => {
          context.setDark();
        }}
        title="Press Me!"
      />
      <Button
        onPress={() => {
          context.setLoading();
        }}
        title="Loading!!!!!"
      />
    </Styles.Wrapper>
  );
};

export default Main;
