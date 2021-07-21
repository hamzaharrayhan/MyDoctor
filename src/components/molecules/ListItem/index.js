import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  IconNext,
  IconEditProfile,
  IconLanguage,
  IconAppRate,
  IconHelpCenter,
} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const ListItem = ({pic, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'app-rate') {
      return <IconAppRate />;
    }
    if (icon === 'help-center') {
      return <IconHelpCenter />;
    }
    return <IconEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        {icon ? <Icon /> : <Image source={pic} style={styles.avatar} />}
      </View>
      <View style={styles.text}>
        <Text style={styles.nama}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.button}>{type === 'next' && <IconNext />}</View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  wrapper: {marginRight: 12, justifyContent: 'center'},
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
  },
  button: {justifyContent: 'center'},
  text: {
    justifyContent: 'center',
    flex: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  nama: {
    fontSize: 16,
    fontFamily: Fonts.primary[400],
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 12,
    fontFamily: Fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
