import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/Screens';
import Loading from './src/Screens/Loading';
import Context from './Context';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    AsyncStorage.getItem('@test', (err, result) => {
      console.log(result);
      setIsDark(result);
    });
    SplashScreen.hide(); // Splash screen 종료
  }, []);

  const [isDark, setIsDark] = useState('');
  const [isLoading, setLoading] = useState(false);

  const contextSetting = {
    setDark: text => {
      setIsDark(text);
    },
    setLoading: () => {
      setLoading(!isLoading);
    },
    getDark: isDark,
    getLoading: isLoading,
  };

  return (
    <Context.Provider value={contextSetting}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#f1f1f1'}}>
        <Loading loading={isLoading} />
        <Main />
      </SafeAreaView>
    </Context.Provider>
  );
};

export default App;
