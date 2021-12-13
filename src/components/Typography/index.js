import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  semibold: {
    fontWeight: '600',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});

const Typography = ({
  bold = false,
  children = null,
  italic = false,
  lineThrough = false,
  semibold = false,
  style = {},
  textAlign = 'left',
  underline = false,
  uppercase = false,
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {color: '#000000'},
        bold && styles.bold,
        italic && styles.italic,
        lineThrough && styles.lineThrough,
        semibold && (Platform.OS === 'ios' ? styles.semibold : styles.bold),
        underline && styles.underline,
        uppercase && styles.uppercase,
        {textAlign},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default Typography;
