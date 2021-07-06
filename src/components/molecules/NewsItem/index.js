import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyNews1, DummyNews2, DummyNews3} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const NewsItem = ({label, picture, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.headline}>{label}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={picture} style={styles.news} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  news: {
    height: 60,
    width: 80,
    borderRadius: 10,
  },
  text: {
    flex: 1,
  },
  headline: {
    maxWidth: '90%',
    fontFamily: Fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  date: {
    fontFamily: Fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
