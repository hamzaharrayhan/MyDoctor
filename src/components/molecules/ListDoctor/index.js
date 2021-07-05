import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconNext} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const ListDoctor = ({pic, name, desc, type}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.avatar} />
      <View style={styles.text}>
        <Text style={styles.nama}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.button}>{type === 'next' && <IconNext />}</View>
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
    justifyContent: 'space-between',
  },
  button: {justifyContent: 'center'},
  text: {
    justifyContent: 'center',
    flex: 1,
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
  desc: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
  },
});
