import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {UserProfile, ListItem, Header} from '../../components';
import {colors} from '../../utils';

const ProfilePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header judul="Profile" onPress={() => navigation.goBack()} />
      <UserProfile
        name="Shayna Melinda"
        desc="Product Designer"
        avatar={DummyUser}
      />
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
          name="Help Center"
          desc="Read our guidelines"
          icon="help-center"
          type="next"
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
