import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        judul="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        pic={DummyDoctor4}
        name="Alexander Jannie"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        type="next"
        pic={DummyDoctor4}
        name="Alexander Jannie"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        pic={DummyDoctor4}
        name="Alexander Jannie"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        pic={DummyDoctor4}
        name="Alexander Jannie"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        pic={DummyDoctor4}
        name="Alexander Jannie"
        desc="wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
