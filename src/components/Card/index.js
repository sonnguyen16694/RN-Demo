import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000000',
    shadowOffset: {height: 8, width: 0},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 2,
  },
});

function Card({color = 'white', style = {}, children = null}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#ffffff',
          borderRadius: 5,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

export default Card;
