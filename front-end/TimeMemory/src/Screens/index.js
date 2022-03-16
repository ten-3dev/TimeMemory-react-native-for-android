import React, {useRef} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import * as Styles from './style';
import CreatePage from './Create';
import ViewPage from './View';

const Main = () => {
  const width = Dimensions.get('window').width;
  const scrollRef = useRef(null);

  const scrollTo = type => {
    if (type === 'view') {
      return scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
    return scrollRef.current.scrollToEnd({animated: true});
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}>
      <Styles.ScreenView width={width}>
        <ViewPage scrollTo={scrollTo} />
      </Styles.ScreenView>
      <Styles.ScreenView width={width}>
        <CreatePage scrollTo={scrollTo} />
      </Styles.ScreenView>
    </ScrollView>
  );
};

export default Main;
