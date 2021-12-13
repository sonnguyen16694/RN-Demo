/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Router from './src/configs/router';
import {getItemAsync} from './src/helpers/storage';

const App: () => Node = () => {
  const [initialRouteName, setInitialRouteName] = useState('Welcome');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function checkLogginUser() {
      const isLogin = await getItemAsync('user');
      if (isLogin) {
        // setInitialRouteName('Home');
        // setLoading(false);
      }
    }
    checkLogginUser();
  }, []);
  return (
    <SafeAreaProvider>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Router initialRouteName={initialRouteName} />
      )}
    </SafeAreaProvider>
  );
};

export default App;
