import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor8} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.all}>
      <Image source={DummyDoctor8} style={styles.pic} />
      <View>
        <View style={styles.container}>
          <Text style={styles.chat}>
            Oh tentu saja tidak karena jeruk itu sangat sehat...
          </Text>
        </View>
        <Text style={styles.time}>4.45 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  all: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  pic: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  container: {
    padding: 12,
    marginBottom: 8,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  chat: {
    fontFamily: Fonts.primary.normal,
    fontSize: 16,
    color: colors.white,
  },
  time: {
    fontFamily: Fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
  },
});
