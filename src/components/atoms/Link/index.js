import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Link = ({judul, posisi, ukuran, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <Text style={styles.text(posisi, ukuran)}>{judul}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (posisi,ukuran) => ({
    fontFamily: 'Nunito-Regular',
    textAlign: posisi,
    fontSize: ukuran,
    textDecorationLine: 'underline',
  }),
});
