import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, Fonts} from '../../../utils';
import {Button, Gaps} from '../../atoms';

const Header = ({judul, type, onPress}) => {
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{judul}</Text>
      <Gaps width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    textAlign: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    fontFamily: Fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
