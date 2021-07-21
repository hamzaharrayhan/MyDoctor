import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {Firebase} from '../../config';
import {colors, Fonts, getData, showError} from '../../utils';
import {chatDate, getChatTime} from '../../utils/date';

const Chatting = ({navigation, route}) => {
  const doctorData = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState('');
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    getLocalDB();
    const chatID = `${user.uid}_${doctorData.data.uid}`;
    const urlDB = `chatting/${chatID}/allChat/`;
    Firebase.database()
      .ref(urlDB)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });
            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [doctorData.data.uid, user.uid]);

  const getLocalDB = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const chatID = `${user.uid}_${doctorData.data.uid}`;
    const urlDB = `chatting/${chatID}/allChat/${chatDate(today)}`;

    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageDoctor = `messages/${doctorData.data.uid}/${chatID}`;
    const dataHistoryChatUser = {
      lastChatContent: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctorData.data.uid,
    }
    const dataHistoryChatDoctor = {
      lastChatContent: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    }
    Firebase.database()
      .ref(urlDB)
      .push(data)
      .then(() => {
        setChatContent('');
        Firebase.database().ref(urlMessageUser).set(dataHistoryChatUser);
        Firebase.database().ref(urlMessageDoctor).set(dataHistoryChatDoctor);
      })
      .catch(err => showError(err.message));
  };

  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        judul={doctorData.data.fullName}
        desc={doctorData.data.profession}
        photo={{uri: doctorData.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {chatData.map(item => {
          return (
            <View key={item.id}>
              <Text style={styles.date}>{item.id}</Text>
              {item.data.map(chat => {
                const isMe = chat.data.sendBy === user.uid 
                return (
                  <View style={styles.chat} key={chat.id}>
                    <ChatItem
                      key={chat.id}
                      mine={isMe}
                      text={chat.data.chatContent}
                      date={chat.data.chatTime}
                      photo={isMe ? null : {uri: doctorData.data.photo}}
                    />
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <InputChat
        value={chatContent}
        name={doctorData.data.fullName}
        onChangeText={val => setChatContent(val)}
        onButtonPress={() => chatSend()}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chat: {
    paddingHorizontal: 16,
    flex: 1,
  },
  date: {
    fontFamily: Fonts.primary[400],
    fontSize: 11,
    color: colors.text.secondary,
    paddingVertical: 20,
    textAlign: 'center',
  },
});
