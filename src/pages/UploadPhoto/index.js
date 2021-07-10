import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gaps} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconDeletePhoto} from '../../assets';
import {colors, Fonts} from '../../utils';
import ImagePicker from 'react-native-image-crop-picker';

const UploadPhoto = ({navigation}) => {
  const getImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      const source = {uri: image.path};
      setPhoto(source);
      setHasPhoto(true);
    });
  };
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [hasPhoto, setHasPhoto] = useState(false);
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
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            judul="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
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
