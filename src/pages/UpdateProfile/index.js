import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Header, UserProfile, Input, Button, Gaps} from '../../components';
import {
  colors,
  Fonts,
  getData,
  showError,
  showSuccess,
  storeData,
} from '../../utils';
import {Firebase} from '../../config';
import ImagePicker from 'react-native-image-crop-picker';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
    email: '',
    password: '',
  });
  const [password, setPassword] = useState('');
  const [currPassword, setCurrPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoDB, setPhotoDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      if (res.photo !== '') {
        setPhoto({uri: res.photo});
        setPhotoDB(res.photo);
        setProfile(res);
      } else {
        setPhoto(ILNullPhoto);
        setPhotoDB('');
        setProfile(res);
      }
    });
  }, []);

  const updateData = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter');
      } else {
        updatePassword();
        updateProfileData();
        navigation.navigate('MainApp', profile);
      }
    } else {
      updateProfileData();
      navigation.navigate('MainApp', profile);
    }
  };

  const updatePassword = () => {
    const user = Firebase.auth().currentUser;
    const credential = Firebase.auth.EmailAuthProvider.credential(
      user.email,
      currPassword,
    );
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user
          .updatePassword(password)
          .then(success => {
            showSuccess('Password berhasil diperbarui');
          })
          .catch(err => {
            showError(err.message);
          });
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data);
        showSuccess('Profile berhasil diperbarui');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({...profile, [key]: value});
  };

  const getImage = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 200,
      compressImageMaxHeight: 200,
      compressImageQuality: 0.3,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        const source = {uri: image.path};
        setPhotoDB(`data:${image.mime};base64, ${image.data}`);
        setPhoto(source);
      })
      .catch(error => {
        const errorM = error;
        showError('Anda belum memasukan foto');
      });
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header judul="Edit Profile" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <UserProfile
            avatar={photo}
            style={styles.avatar}
            isRemove={true}
            onPress={getImage}
          />
          <Gaps height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={val => changeText('fullName', val)}
          />
          <Gaps height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={val => changeText('profession', val)}
          />
          <Gaps height={24} />
          <Input label="Email Address" value={profile.email} disable={true} />
          <Gaps height={30} />
          <Text style={styles.updatepass}>Update Password</Text>
          <Gaps height={16} />
          <Input
            secureTextEntry={true}
            label="Current Password"
            value={currPassword}
            onChangeText={val => setCurrPassword(val)}
          />
          <Gaps height={24} />
          <Input
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <Gaps height={40} />
          <Button judul="Save Profile" onPress={updateData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingBottom: 48,
  },
  avatar: {
    marginBottom: 26,
  },
  updatepass: {
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    fontSize: 16,
  },
});
