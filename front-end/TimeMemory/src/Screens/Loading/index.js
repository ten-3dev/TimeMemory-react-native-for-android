import React from 'react';
import * as Styles from './style';
import LoadingGif from '../../../Assets/loading.gif';

const Loading = ({loading}) => {
  return (
    <Styles.Wrapper display={loading}>
      <Styles.CustomGiF source={LoadingGif} />
      <Styles.LoadingText>로딩중...</Styles.LoadingText>
    </Styles.Wrapper>
  );
};

export default Loading;
