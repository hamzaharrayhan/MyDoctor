import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header, ListItem} from '../../components';
import {Firebase} from '../../config';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const doctorCategory = route.params;
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    doctorByCategory(doctorCategory.category);
  }, [doctorCategory.category]);

  const doctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const objData = res.val();
          const data = [];
          Object.keys(objData).map(item => {
            data.push({
              id: item,
              data: objData[item],
            });
          });
          setDoctors(data);
        }
      });
  };
  return (
    <ScrollView style={styles.page}>
      <View>
        <Header
          judul={`Pilih ${doctorCategory.category}`}
          type="dark"
          onPress={() => navigation.goBack()}
        />
        {doctors.map(doctor => {
          return (
            <ListItem
              key={doctor.id}
              type="next"
              pic={{uri: doctor.data.photo}}
              name={doctor.data.fullName}
              desc={doctor.data.gender}
              onPress={() => navigation.navigate('DoctorProfile', doctor)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
