import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import {ListDoctor, Gaps} from '../../components';
import {colors, Fonts} from '../../utils';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      pic: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      pic: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      pic: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Gaps width={30} />
        <Text style={styles.text}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              pic={doctor.pic}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    paddingTop: 30,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    paddingHorizontal: 16,
  },
});
