import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {DummyDoctor4} from '../../assets';
import {Header, ListItem} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Header
          judul="Pilih Dokter Anak"
          type="dark"
          onPress={() => navigation.goBack()}
        />
        <ListItem
          type="next"
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
        <ListItem
          type="next"
          type="next"
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
        <ListItem
          type="next"
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
        <ListItem
          type="next"
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
        <ListItem
          type="next"
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
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
