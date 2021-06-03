import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputan} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  inputan: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
  },
});
