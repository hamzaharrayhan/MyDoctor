import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gaps, Input, Link} from '../../components';
import { colors, Fonts } from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <Gaps height={40} />
      <Input label="Email Address" />
      <Gaps height={24} />
      <Input label="Password" />
      <Gaps height={10} />
      <Link judul="Forgot My Password" ukuran={12} />
      <Gaps height={40} />
      <Button judul="Sign In" />
      <Gaps height={30} />
      <Link judul="Create New Account" ukuran={16} posisi="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    fontFamily: Fonts.primary[600],
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
    color: colors.text.primary,
    maxWidth: 153,
  },
});
