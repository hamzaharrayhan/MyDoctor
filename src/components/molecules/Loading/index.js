import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, Fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.loadingBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.primary[600],
    fontSize: 18,
    color: colors.primary,
    marginTop: 16,
  },
});
