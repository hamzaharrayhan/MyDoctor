import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gaps, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header judul="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gaps height={24} />
        <Input label="Pekerjaan" />
        <Gaps height={24} />
        <Input label="Email Address" />
        <Gaps height={24} />
        <Input label="Password" />
        <Gaps height={40} />
        <Button
          judul="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
