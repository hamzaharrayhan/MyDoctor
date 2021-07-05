import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, Fonts} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <Text style={styles.chat}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  all: {alignItems: 'flex-end', marginBottom: 20},
  container: {
    paddingVertical: 12,
    paddingLeft: 12,
    marginBottom: 8,
    backgroundColor: colors.myChat,
    maxWidth: '60%',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  chat: {
    fontFamily: Fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  time: {
    fontFamily: Fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
  }
});
