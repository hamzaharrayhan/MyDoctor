import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Gaps} from '../../components';
import {Firebase} from '../../config';
import {colors, Fonts, getData} from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState('');
  const [lastChat, setLastChat] = useState([]);

  useEffect(() => {
    getLocalDB();
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}`;
    const messagesDB = rootDB.child(urlHistory);
    messagesDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const objData = snapshot.val();
        const data = [];
        const promises = await Object.keys(objData).map(async val => {
          const urlUidDoctor = `doctors/${objData[val].uidPartner}`;
          const doctorDetail = await rootDB.child(urlUidDoctor).once('value');
          data.push({
            id: val,
            doctorDetail: doctorDetail.val(),
            data: objData[val],
          });
        });
        await Promise.all(promises);
        setLastChat(data);
      }
    });
  }, [user.uid]);

  const getLocalDB = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Gaps width={30} />
        <Text style={styles.text}>Messages</Text>
        {lastChat.map(item => {
          const doctorData = {
            id: item.uidPartner,
            data: item.doctorDetail,
          }
          return (
            <ListItem
              key={item.id}
              pic={{uri: item.doctorDetail.photo}}
              name={item.doctorDetail.fullName}
              desc={item.data.lastChatContent}
              onPress={() => navigation.navigate('Chatting', doctorData)}
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
