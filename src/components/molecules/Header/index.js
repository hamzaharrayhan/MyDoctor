import React from 'react';
import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {colors} from '../../../utils';
import {Gaps} from '../../atoms';

const Header = ({judul, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconBackDark />
      </TouchableOpacity>
      <Text style={styles.text}>{judul}</Text>
      <Gaps width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
