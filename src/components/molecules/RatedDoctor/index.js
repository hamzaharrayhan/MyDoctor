import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../../assets';
import {IconStar} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.profilpic} />
      <View style={styles.textstar}>
        <View style={styles.text}>
          <Text style={styles.nama}>Alexa Rachel</Text>
          <Text style={styles.profesi}>Pediatrician</Text>
        </View>
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  profilpic: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textstar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
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
  star: {
    flexDirection: 'row',
  },
});
