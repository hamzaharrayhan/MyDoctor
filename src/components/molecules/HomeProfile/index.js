import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser, ILNullPhoto} from '../../../assets';
import {colors, Fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      res.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.foto} />
      <View style={styles.text}>
        <Text style={styles.nama}>{profile.fullName}</Text>
        <Text style={styles.profesi}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  foto: {height: 46, width: 46, marginRight: 12, borderRadius: 46 / 2},
  text: {justifyContent: 'center'},
  nama: {
    fontFamily: Fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profesi: {
    fontFamily: Fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
