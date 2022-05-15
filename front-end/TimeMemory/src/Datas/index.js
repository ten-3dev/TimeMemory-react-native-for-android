import axios from 'axios';
import {Alert, BackHandler} from 'react-native';

const url = 'http://49.50.167.232:3000/';

export const GetView = async () => {
  try {
    const data = await axios.get(url + 'getAll');
    if (data.status === 200) {
      return data.data.reverse();
    }
  } catch {
    Alert.alert('경고', '인터넷 상태 및 알 수 없는 오류입니다.', [
      {text: '종료하기', onPress: () => BackHandler.exitApp()},
    ]);
  }
};

export const PostCreate = async ({arg, navigation}) => {
  try {
    await axios.post(url + 'create', arg);
    Alert.alert('알림', '생성 완료', [
      {text: 'View 화면으로 이동', onPress: () => navigation.navigate('View')},
    ]);
  } catch {
    Alert.alert('경고', '인터넷 상태 및 알 수 없는 오류입니다.', [
      {text: '종료하기', onPress: () => BackHandler.exitApp()},
    ]);
  }
};

export const DeleteRemove = async id => {
  try {
    await axios.delete(url + 'remove/' + id);
  } catch {
    Alert.alert('경고', '인터넷 상태 및 알 수 없는 오류입니다.', [
      {text: '종료하기', onPress: () => BackHandler.exitApp()},
    ]);
  }
};
