import React from 'react';
import {Button, Text, View} from 'react-native';
import * as Styles from './style';
import Common from '../../Styles/common';

const CreatePage = ({scrollTo}) => {
  return (
    <View style={Common('bg')}>
      <Text>2</Text>
      <Button title="move" onPress={() => scrollTo('view')} />
    </View>
  );
};

export default CreatePage;
