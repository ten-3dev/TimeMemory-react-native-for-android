import {useContext} from 'react';
import Context from '../../Context';

const Common = type => {
  const context = useContext(Context);

  switch (type) {
    case 'bg':
      return {
        flex: 1,
        backgroundColor: context.getDark === 'dark' ? '#616161' : '#F1F1F1',
      };
  }
};

export default Common;
