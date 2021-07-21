import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser, IconDeletePhoto} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const UserProfile = ({name, desc, avatar, isRemove, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View>
          <View style={styles.imgborder}>
            <Image source={avatar} style={styles.avatar} />
          </View>
          {isRemove && <IconDeletePhoto style={styles.delete} />}
        </View>
      )}
      {isRemove && (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.imgborder}>
            <Image source={avatar} style={styles.avatar} />
          </View>
          <IconDeletePhoto style={styles.delete} />
        </TouchableOpacity>
      )}
      {name && (
        <View style={styles.text}>
          <Text style={styles.nama}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  imgborder: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nama: {
    fontFamily: Fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginBottom: 2,
  },
  job: {
    fontFamily: Fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
  delete: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
