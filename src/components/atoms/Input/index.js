import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, Fonts} from '../../../utils';

const Input = ({label, onChangeText, value, secureTextEntry}) => {
  const [borderC, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputan(borderC)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontFamily: Fonts.primary.normal,
    fontSize: 16,
    marginBottom: 6,
  },
  inputan: borderC => ({
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: borderC,
    height: 45,
  }),
});
