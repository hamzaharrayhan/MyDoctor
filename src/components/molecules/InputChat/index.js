import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, Fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = ({value, onChangeText, onButtonPress, name}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Tulis Pesan Untuk ${name}`}
        placeholderTextColor={colors.text.secondary}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        disable={value.length < 1}
        style={styles.send}
        type="send"
        onPress={onButtonPress}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    height: 45,
    marginRight: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.primary.normal,
    color: colors.text.primary,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  send: {
    width: 45,
    height: 45,
  },
});
