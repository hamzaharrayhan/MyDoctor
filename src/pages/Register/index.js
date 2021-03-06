import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button, Gaps, Header, Input} from '../../components';
import {colors, showError, storeData, useForm} from '../../utils';
import {Firebase} from '../../config';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const data = {
      fullName: form.fullName,
      profession: form.profession,
      email: form.email,
      password: form.password,
    };
    storeData('user', data);
    dispatch({type: 'SET_LOADING', value: false});
    navigation.navigate('UploadPhoto');
    // Firebase.auth()
    //   .createUserWithEmailAndPassword(form.email, form.password)
    //   .then(userCredential => {
    //     // Signed in
    //     dispatch({type: 'SET_LOADING', value: false});
    //     setForm('reset');
    //     const data = {
    //       fullName: form.fullName,
    //       profession: form.profession,
    //       email: form.email,
    //       uid: userCredential.user.uid,
    //     };
    //     Firebase.database()
    //       .ref('users/' + userCredential.user.uid + '/')
    //       .set(data);

    //   })
    //   .catch(error => {
    //     dispatch({type: 'SET_LOADING', value: false});
    //     showError(error.message);
    //   });
  };

  return (
    <View style={styles.page}>
      <Header judul="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
