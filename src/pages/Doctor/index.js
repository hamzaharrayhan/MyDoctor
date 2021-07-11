import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  RatedDoctor,
  NewsItem,
  Gaps,
} from '../../components';
import {colors, Fonts, getData} from '../../utils';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyNews1,
  DummyNews2,
  DummyNews3,
  JSONDoctorCategory,
} from '../../assets';
import { useEffect } from 'react';

const Doctor = ({navigation}) => {
  useEffect(() => {
    getData('user').then(res => {
      console.log('data user:', res);
    })
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Gaps height={30} />
          <View style={styles.profile}>
            <HomeProfile onPress={() => navigation.navigate('ProfilePage')} />
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
              <RatedDoctor
                name="Alexa Rachel"
                desc="Pediatrician"
                avatar={DummyDoctor1}
                onPress={() => navigation.navigate('DoctorProfile')}
              />
              <RatedDoctor
                name="Sunny Frank"
                desc="Dentist"
                avatar={DummyDoctor2}
                onPress={() => navigation.navigate('DoctorProfile')}
              />
              <RatedDoctor
                name="Poe Minh"
                desc="Podiatrist"
                avatar={DummyDoctor3}
                onPress={() => navigation.navigate('DoctorProfile')}
              />
            </View>
          </View>
          <View>
            <Text style={styles.sectionlabel2}>Good News</Text>
            <NewsItem
              picture={DummyNews1}
              date="Today"
              label="Is it safe to stay at home during coronavirus?"
            />
            <NewsItem
              picture={DummyNews2}
              date="Today"
              label="Consume yellow citrus helps you healthier"
            />
            <NewsItem
              picture={DummyNews3}
              date="Today"
              label="Learn how to make a proper orange juice at home"
            />
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
