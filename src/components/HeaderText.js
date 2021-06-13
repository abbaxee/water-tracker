import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils';
import {WHITE_COLOR} from '../utils/Colors';

const HeaderText = ({quantity, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quantity}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {maxWidth: '50%'},
  title: {
    fontSize: hp(40),
    marginBottom: hp(10),
    fontWeight: 'bold',
    textAlign: 'center',
    color: WHITE_COLOR,
  },
  description: {
    fontSize: hp(16),
    textAlign: 'center',
    color: WHITE_COLOR,
    width: wp(120),
  },
});

export default HeaderText;
