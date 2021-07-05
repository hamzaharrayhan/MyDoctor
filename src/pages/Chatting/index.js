import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, Fonts} from '../../utils';

const Chatting = navigation => {
  return (
    <View style={styles.container}>
      <Header type="dark-profile" onPress={() => navigation.goBack()} />
      <Text style={styles.date}>Senin, 21 Maret 2020</Text>
      <View style={styles.chat}>
        <ChatItem mine />
        <ChatItem />
        <ChatItem mine />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chat: {
    paddingHorizontal: 16,
    flex: 1,
  },
  date: {
    fontFamily: Fonts.primary[400],
    fontSize: 11,
    color: colors.text.secondary,
    paddingVertical: 20,
    textAlign: 'center',
  },
});
