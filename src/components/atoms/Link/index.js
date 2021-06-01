import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({judul, posisi, ukuran}) => {
  return (
    <View>
      <Text style={styles.text(posisi, ukuran)}>{judul}</Text>
    </View>
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
