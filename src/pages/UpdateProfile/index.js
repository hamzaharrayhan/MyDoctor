import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {DummyUser} from '../../assets';
import {Header, UserProfile, Input, Button, Gaps} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header judul="Edit Profile" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <UserProfile avatar={DummyUser} style={styles.avatar} isRemove />
          <Gaps height={26} />
          <Input label="Full Name" />
          <Gaps height={24} />
          <Input label="Pekerjaan" />
          <Gaps height={24} />
          <Input label="Email Address" />
          <Gaps height={24} />
          <Input label="Password" />
          <Gaps height={40} />
          <Button judul="Save Profile" onPress={() => navigation.goBack()} />
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
});
