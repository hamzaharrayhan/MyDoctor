import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, Fonts} from '../../../utils';

const HomeProfile = ({onPress, photo, name, profession}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.foto} />
      <View style={styles.text}>
        <Text style={styles.nama}>{name}</Text>
        <Text style={styles.profesi}>{profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  foto: {height: 46, width: 46, marginRight: 12, borderRadius: 46 / 2},
  text: {justifyContent: 'center'},
  nama: {
    fontFamily: Fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profesi: {
    fontFamily: Fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
