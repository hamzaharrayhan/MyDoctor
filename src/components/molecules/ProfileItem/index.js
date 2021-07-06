import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors, Fonts } from '../../../utils';

const ProfileItem = ({title, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.konten}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  konten: {
    marginHorizontal: 16,
  },
  title: {
    fontFamily: Fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  value: {
    fontFamily: Fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
    marginBottom: 16,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 16
  },
});
