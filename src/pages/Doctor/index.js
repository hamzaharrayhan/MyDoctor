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
import {JSONDoctorCategory} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView vertical showsVerticalScrollIndicator>
          <Gaps height={30} />
          <View style={styles.profile}>
            <HomeProfile />
            <Text style={styles.ask}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperscroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.kategori}>
                <Gaps width={32} />
                {JSONDoctorCategory.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      kategori={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gaps width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.ratenews}>
            <View>
              <Text style={styles.sectionlabel}>Top Rated Doctors</Text>
              <RatedDoctor />
              <RatedDoctor />
              <RatedDoctor />
            </View>
          </View>
          <View>
            <Text style={styles.sectionlabel2}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
          <Gaps height={16} />
        </ScrollView>
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
  profile: {
    paddingHorizontal: 16,
  },
  content: {
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
    paddingBottom: 16,
  },
  kategori: {flexDirection: 'row'},
  wrapperscroll: {marginHorizontal: -16},
  ratenews: {paddingHorizontal: 16},
  sectionlabel: {
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    fontSize: 16,
  },
  sectionlabel2: {
    paddingHorizontal: 16,
    marginTop: 14,
    color: colors.text.primary,
    fontFamily: Fonts.primary[600],
    fontSize: 16,
  },
});
