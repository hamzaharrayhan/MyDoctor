import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../../atoms';
import {colors, Fonts} from '../../../utils';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.texts}>
        <Text style={styles.nama}>{title}</Text>
        <Text style={styles.profesi}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.profile} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  texts: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  nama: {
    color: colors.white,
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    marginBottom: 6,
    textAlign: 'center',
  },
  profesi: {
    color: colors.text.subTitle,
    fontSize: 14,
    fontFamily: Fonts.primary[400],
  },
  profile: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
