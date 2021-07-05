import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, Fonts} from '../../../utils';
import {Button} from '../..';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi" />
      <Button disable style={styles.send} type="send" />
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
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  send: {
    width: 45,
    height: 45,
  }
});
