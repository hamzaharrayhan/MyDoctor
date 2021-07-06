import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.foto} />
      <View style={styles.text}>
        <Text style={styles.nama}>Shayna Melinda</Text>
        <Text style={styles.profesi}>Product Designer</Text>
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
  },
  profesi: {
    fontFamily: Fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
