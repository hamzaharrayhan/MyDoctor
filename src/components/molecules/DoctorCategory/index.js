import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILCatUmum, ILCatPsikiater, ILCatObat, ILCatAnak} from '../../../assets';
import {Gaps} from '../../../components';
import {colors, Fonts} from '../../../utils';

const DoctorCategory = ({kategori, onPress}) => {
  const Category = () => {
    if (kategori === 'dokter umum') {
      return <ILCatUmum />;
    }
    if (kategori === 'psikiater') {
      return <ILCatPsikiater />;
    }
    if (kategori === 'obat') {
      return <ILCatObat />;
    }
    if (kategori === 'dokter anak') {
      return <ILCatAnak />;
    }
    return <ILCatUmum />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Category />
      <Gaps height={28} />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.catt}>{kategori}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    marginRight: 10,
    width: 100,
    height: 130,
    borderRadius: 10,
  },
  label: {
    fontFamily: Fonts.primary[300],
    fontSize: 12,
  },
  catt: {
    fontFamily: Fonts.primary[600],
    fontSize: 12,
  },
});
