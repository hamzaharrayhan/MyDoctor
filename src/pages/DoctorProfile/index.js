import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor8} from '../../assets';
import {Header, ProfileItem, UserProfile, Gaps, Button} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header judul="Doctor Profile" onPress={() => navigation.goBack()} />
      <UserProfile
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
        avatar={DummyDoctor8}
      />
      <Gaps height={26} />
      <ProfileItem title="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem title="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem title="No. STR" value="12355866953266532" />
      <Gaps height={7} />
      <View style={styles.button}>
        <Button
          judul="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  button: {
    paddingHorizontal: 40,
  },
});
