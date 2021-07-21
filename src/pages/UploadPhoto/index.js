import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gaps} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconDeletePhoto} from '../../assets';
import {colors, Fonts, storeData, getData, showError} from '../../utils';
import ImagePicker from 'react-native-image-crop-picker';
import {Firebase} from '../../config';
import {useDispatch} from 'react-redux';

const UploadPhoto = ({navigation}) => {
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoDB, setPhotoDB] = useState('');
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
  }, []);

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
        setHasPhoto(true);
      })
      .catch(() => {
        showError('Anda belum memasukan foto');
        setPhotoDB(
          'https://firebasestorage.googleapis.com/v0/b/my-doctor-76977.appspot.com/o/null-photo.png?alt=media&token=65ff8bfc-85c2-47a1-af5a-aa82c853fef7',
        );
        setPhoto({
          uri: 'https://firebasestorage.googleapis.com/v0/b/my-doctor-76977.appspot.com/o/null-photo.png?alt=media&token=65ff8bfc-85c2-47a1-af5a-aa82c853fef7',
        });
      });
  };

  // const uploadAndContinue = () => {
  //   Firebase.database()
  //     .ref('users/' + profile.uid + '/')
  //     .update({photo: photoDB});
  //   const data = profile;
  //   data.photo = photoDB;
  //   storeData('user', data);
  //   navigation.replace('MainApp');
  // };

  const dispatch = useDispatch();
  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .createUserWithEmailAndPassword(profile.email, profile.password)
      .then(userCredential => {
        // Signed in
        dispatch({type: 'SET_LOADING', value: false});
        const data = {
          fullName: profile.fullName,
          profession: profile.profession,
          email: profile.email,
          photo: photoDB,
          uid: userCredential.user.uid,
        };
        Firebase.database()
          .ref('users/' + userCredential.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('MainApp', profile);
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };

  const onSkip = () => {
    setPhoto({
      uri: 'https://firebasestorage.googleapis.com/v0/b/my-doctor-76977.appspot.com/o/null-photo.png?alt=media&token=65ff8bfc-85c2-47a1-af5a-aa82c853fef7',
    });
    Firebase.auth()
      .createUserWithEmailAndPassword(profile.email, profile.password)
      .then(userCredential => {
        // Signed in
        dispatch({type: 'SET_LOADING', value: false});
        const data = {
          fullName: profile.fullName,
          profession: profile.profession,
          email: profile.email,
          photo:
            'https://firebasestorage.googleapis.com/v0/b/my-doctor-76977.appspot.com/o/null-photo.png?alt=media&token=65ff8bfc-85c2-47a1-af5a-aa82c853fef7',
          uid: userCredential.user.uid,
        };
        console.log('datanya apa aja', data)
        Firebase.database()
          .ref('users/' + userCredential.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('MainApp', profile);
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header judul="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto ? (
              <IconAddPhoto style={styles.addPhoto} />
            ) : (
              <IconDeletePhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{profile.fullName}</Text>
          <Text style={styles.profession}>{profile.profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            judul="Upload and Continue"
            onPress={onContinue}
          />
          <Gaps height={30} />
          <Link
            judul="Skip for Now"
            posisi="center"
            size={16}
            color={colors.text.secondary}
            onPress={onSkip}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {flex: 1, backgroundColor: colors.white},
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: Fonts.primary.normal,
    textAlign: 'center',
  },
});
