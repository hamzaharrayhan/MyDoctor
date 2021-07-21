import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, Fonts} from '../../../utils';
import IconOnly from './IconOnly';
import SendButton from './SendButton';

const Button = ({type, judul, onPress, icon, disable}) => {
  if (type === 'send') {
    return <SendButton disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableTxt}>{judul}</Text>
      </View>
    )
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
  disableBg: {
    backgroundColor: colors.button.disable.background,
    borderRadius: 10,
    paddingVertical: 10,
  },
  disableTxt: {
    color: colors.button.disable.text,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.primary[600],    
  },
  text: type => ({
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.primary[600],
    color:
      type === 'Secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
