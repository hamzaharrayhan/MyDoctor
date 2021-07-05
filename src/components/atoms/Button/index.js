import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import IconOnly from './IconOnly';
import SendButton from './SendButton';

const Button = ({type, judul, onPress, icon, disable}) => {
  if (type === 'send') {
    return <SendButton disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{judul}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'Secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color:
      type === 'Secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
