import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gaps} from '../../atoms';

const Header = ({judul, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
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
