import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, Fonts} from '../../../utils';

const ListDoctor = ({pic, name, chat}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.avatar} />
      <View style={styles.text}>
        <Text style={styles.nama}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  text: {
    justifyContent: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  nama: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
  },
  chat: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
  },
});
