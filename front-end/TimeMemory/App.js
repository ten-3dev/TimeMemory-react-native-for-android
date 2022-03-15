import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/Screens';
import Context from './Context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Splash screen 종료
  }, []);

  const [isDark, setIsDark] = useState(true);

  const contextSetting = {
    setContext: () => {
      setIsDark(!isDark);
    },
    getContext: isDark,
  };

  return (
    <Context.Provider value={contextSetting}>
      <SafeAreaView style={{flex: 1}}>
        <Main />
      </SafeAreaView>
    </Context.Provider>
  );
};

export default App;
