import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button, Gaps, Header, Input, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {Firebase} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(userCredential => {
        // Signed in
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        Firebase.database()
          .ref('users/' + userCredential.user.uid + '/')
          .set(data);
        var user = userCredential;
        console.log('success register', user);
      })
      .catch(error => {
        setLoading(false);
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });

    // () => navigation.navigate('UploadPhoto')
  };
  return (
    <>
      <View style={styles.page}>
        <Header judul="Daftar Akun" onPress={() => navigation.goBack()} />
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
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
