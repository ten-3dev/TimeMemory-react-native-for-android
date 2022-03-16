import React from 'react';
import {Button, Text, View} from 'react-native';
import * as Styles from './style';
import Common from '../../Styles/common';

const ViewPage = ({scrollTo}) => {
  return (
    <View style={Common('bg')}>
      <Text>1</Text>
      <Button title="move" onPress={() => scrollTo('create')} />
    </View>
  );
};
export default ViewPage;
