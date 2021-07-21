import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  RatedDoctor,
  NewsItem,
  Gaps,
} from '../../components';
import {colors, Fonts, getData, showError} from '../../utils';
import {ILNullPhoto} from '../../assets';
import {useFocusEffect} from '@react-navigation/native';
import {Firebase} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [doctorCategory, setDoctorCategory] = useState([]);
  const [topDoctors, setTopDoctors] = useState([]);
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        getData('user').then(res => {
          if (res.photo === '') {
            res.photo = ILNullPhoto;
            setProfile(res);
          } else {
            res.photo = {uri: res.photo};
            setProfile(res);
          }
          navigation.navigate('Doctor');
        });
      }, 1);
      getNews();
      getDoctorCategory();
      getTopRatedDoctor();
    }, []),
  );

  const getTopRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const objData = res.val();
          const data = [];
          Object.keys(objData).map(key => {
            data.push({
              id: key,
              data: objData[key],
            });
          });
          setTopDoctors(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getDoctorCategory = () => {
    Firebase.database()
      .ref('doctor_category/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setDoctorCategory(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Gaps height={30} />
          <View style={styles.profile}>
            <HomeProfile
              onPress={() => navigation.navigate('ProfilePage')}
              name={profile.fullName}
              photo={profile.photo}
              profession={profile.profession}
            />
            <Text style={styles.ask}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperscroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.kategori}>
                <Gaps width={32} />
                {doctorCategory.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      kategori={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
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
              {topDoctors.map(doctor => {
                return (
                  <RatedDoctor
                    key={doctor.id}
                    name={doctor.data.fullName}
                    desc={doctor.data.profession}
                    avatar={{uri: doctor.data.photo}}
                    onPress={() => navigation.navigate('DoctorProfile', doctor)}
                  />
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.sectionlabel2}>Good News</Text>
            {news.map(item => {
              return (
                <NewsItem
                  title={item.title}
                  image={item.image}
                  date={item.date}
                  key={item.id}
                />
              );
            })}
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
