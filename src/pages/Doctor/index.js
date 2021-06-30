import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  RatedDoctor,
  NewsItem,
  Gaps,
} from '../../components';
import {colors, Fonts} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.ask}>Mau konsultasi dengan siapa hari ini?</Text>
        <View style={styles.wrapperscroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.kategori}>
              <Gaps width={16} />
              <DoctorCategory kategori="dokter umum" />
              <DoctorCategory kategori="psikiater" />
              <DoctorCategory kategori="obat" />
              <DoctorCategory kategori="dokter anak" />
              <Gaps width={6} />
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.sectionlabel}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
        </View>
        <View>
          <Text style={styles.sectionlabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </View>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  ask: {
    fontFamily: Fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    width: 209,
    paddingTop: 30,
  },
  kategori: {flexDirection: 'row'},
  wrapperscroll: {marginHorizontal: -16},
  sectionlabel: {
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    fontSize: 16,
  },
});
