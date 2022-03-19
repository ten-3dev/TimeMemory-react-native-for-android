import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Main from './src/Screens';
import Loading from './src/Screens/Loading';
import Context from './Context';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {light, dark} from './src/Styles/theme';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('darkmode', (err, result) => {
      if (err) throw err;
      setIsDark(result === null ? false : result === 'light' ? false : true);
    });

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const contextSetting = {
    setDark: bool => {
      setIsDark(bool);
    },
    setLoading: () => {
      setLoading(!isLoading);
    },
    getDark: isDark,
    getLoading: isLoading,
  };

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Context.Provider value={contextSetting}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#f1f1f1'}}>
          <Loading loading={isLoading} />
          <Main />
        </SafeAreaView>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
