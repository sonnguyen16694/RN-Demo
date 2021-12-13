import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemAsync = async key => {
  if (!key || typeof key !== 'string') {
    return Promise.resolve();
  }

  return AsyncStorage.getItem(key);
};

export const setItemAsync = async (key, value) => {
  if (!key || typeof key !== 'string') {
    return Promise.resolve();
  }

  return AsyncStorage.setItem(key, value);
};
