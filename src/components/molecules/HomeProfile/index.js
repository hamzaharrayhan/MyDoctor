import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.foto} />
      <View style={styles.text}>
        <Text style={styles.nama}>Shayna Melinda</Text>
        <Text style={styles.profesi}>Product Designer</Text>
      </View>
    </View>
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
  },
  profesi: {
    fontFamily: Fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
