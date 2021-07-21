import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ProfileItem, UserProfile, Gaps, Button} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const doctorData = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Header judul="Doctor Profile" onPress={() => navigation.goBack()} />
        <UserProfile
          name={doctorData.data.fullName}
          desc={doctorData.data.profession}
          avatar={{uri: doctorData.data.photo}}
        />
        <Gaps height={26} />
        <ProfileItem title="Alumnus" value={doctorData.data.university} />
        <ProfileItem
          title="Tempat Praktik"
          value={doctorData.data.hospital_address}
        />
        <ProfileItem title="No. STR" value={doctorData.data.str_number} />
        <Gaps height={7} />
        <View style={styles.button}>
          <Button
            judul="Start Consultation"
            onPress={() => navigation.navigate('Chatting', doctorData)}
          />
        </View>
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
