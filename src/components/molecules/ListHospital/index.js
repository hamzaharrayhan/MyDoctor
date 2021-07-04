import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, Fonts} from '../../../utils';

const ListHospital = ({pic, type, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.nama}>{type}</Text>
        <Text style={styles.nama}>{name}</Text>
        <Text style={styles.jalan}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  container: {
    paddingBottom: 16,
    paddingLeft: 16,
    marginBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  nama: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
    color: colors.text.primary,
  },
  jalan: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
