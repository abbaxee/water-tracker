import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils';
import {WHITE_COLOR} from '../utils/Colors';

const Quantity = ({item, selected}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.container, {opacity: selected ? 1 : 0.6}]}>
      <Text style={styles.title}>{item} ml</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: wp(15)},
  title: {
    fontSize: hp(26),
    fontWeight: 'bold',
    textAlign: 'center',
    color: WHITE_COLOR,
  },
});

export default Quantity;
