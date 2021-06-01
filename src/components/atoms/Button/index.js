import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, judul, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{judul}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'Else' ? 'white' : '#0BCAD4',
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: type === 'Else' ? 'black' : 'white',
  }),
});
