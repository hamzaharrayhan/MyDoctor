import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button, Gaps, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';
import {Firebase} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(userCredential => {
        // Signed in
        var user = userCredential;
        console.log('success register', user);
        // ...
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log('error register: ', errorMessage);
        // ..
      });

    // () => navigation.navigate('UploadPhoto')
  };
  return (
    <View style={styles.page}>
      <Header
        judul="Daftar Akun"
        onPress={() => navigation.goBack('GetStarted')}
      />
      <ScrollView>
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gaps height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession', value)}
          />
          <Gaps height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gaps height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gaps height={40} />
          <Button judul="Continue" onPress={onContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
