import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {UserProfile, ListItem, Header} from '../../components';
import {colors, getData, showSuccess} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {ILNullPhoto} from '../../assets';
import {useFocusEffect} from '@react-navigation/native';

const ProfilePage = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useFocusEffect(
    React.useCallback(() => {
      navigation.navigate('ProfilePage');
      getData('user').then(res => {
        res.photo = res.photo === '' ? ILNullPhoto : {uri: res.photo};
        setProfile(res);
      });
    }, []),
  );

  const logOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        showSuccess('Sign out success');
        navigation.navigate('GetStarted');
      })
      .catch(error => {
        // An error happened.
        showMessage({
          message: 'Sign Out failed',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <View style={styles.container}>
      <Header judul="Profile" onPress={() => navigation.navigate('MainApp')} />
      {profile.fullName.length > 0 && (
        <UserProfile
          name={profile.fullName}
          desc={profile.profession}
          avatar={profile.photo}
        />
      )}
      <View style={styles.list}>
        <ListItem
          name="Edit Profile"
          desc="Last Updated Yesterday"
          icon="edit-profile"
          type="next"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <ListItem
          name="Language"
          desc="Available 1 Language"
          icon="language"
          type="next"
        />
        <ListItem
          name="Give Us Rate"
          desc="On Google Play Store"
          icon="app-rate"
          type="next"
        />
        <ListItem
          name="Sign Out"
          desc="Sign Out Account"
          icon="help-center"
          type="next"
          onPress={logOut}
        />
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  list: {
    marginTop: 30,
  },
});
