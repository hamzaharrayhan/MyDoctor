import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconSendActive, IconSendDisable} from '../../../assets';
import {colors} from '../../../utils';

const SendButton = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDisable />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendActive />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.button.send.active,
    width: 45,
    height: 45,
    paddingTop: 3.1,
    paddingRight: 3.1,
    paddingLeft: 8.09,
    paddingBottom: 8.09,
    borderRadius: 10,
  }),
});
