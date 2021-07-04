import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors, Fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          pic={DummyHospital1}
          type="Rumah Sakit"
          name="Citra bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          pic={DummyHospital2}
          type="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 21"
        />
        <ListHospital
          pic={DummyHospital3}
          type="Rumah Sakit Jiwa"
          name="Jiwa-Jiwa yang Resah"
          address="Jln. Surya Sejahtera 22"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -20,
    paddingTop: 20,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.primary[600],
  },
  desc: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: Fonts.primary[300],
    paddingTop: 6,
  },
});
