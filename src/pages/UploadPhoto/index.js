import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gaps} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconDeletePhoto} from '../../assets';
import {colors, Fonts, storeData} from '../../utils';
import ImagePicker from 'react-native-image-crop-picker';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoDB, setPhotoDB] = useState('');
  const {fullName, profession, uid} = route.params;
  const getImage = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 200,
      compressImageMaxHeight: 200,
      compressImageQuality: 0.3,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        // console.log(image);
        const source = {uri: image.path};
        setPhotoDB(`data:${image.mime};base64, ${image.data}`);
        setPhoto(source);
        setHasPhoto(true);
      })
      .catch(error => {
        const errorM = error;
        // console.log(errorM);
        showMessage({
          message: 'Anda belum memasukan foto',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoDB});
    navigation.replace('MainApp');
  };

  const data = route.params;
  data.photo = photoDB;

  storeData('user', data)

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
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            judul="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gaps height={30} />
          <Link
            judul="Skip for Now"
            posisi="center"
            size={16}
            color={colors.text.secondary}
            onPress={() => navigation.replace('MainApp')}
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
